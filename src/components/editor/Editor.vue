<template>
  <div class="editor-container">
    <div id="editor"></div>
    <div id="editor-content-controls">
      <button id="save-button" @click="save" :disabled="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5 5v14h14V7.83L16.17 5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3-8H6V6h9z"
            opacity="0.3"
          />
          <path
            fill="currentColor"
            d="M17 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V7zm2 16H5V5h11.17L19 7.83zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M6 6h9v4H6z"
          />
        </svg>
      </button>
      <button id="clear-button" @click="verifyBeforeClear" :disabled="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path fill="currentColor" d="M8 9h8v10H8z" opacity="0.3" />
          <path
            fill="currentColor"
            d="m15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM8 9h8v10H8z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import EditorJS from "@editorjs/editorjs";
import useNotificationSystem from "../../composables/useNotificationSystem";
import { initializeEditor } from "./init";

const editor = ref<EditorJS | null>(null);
const loading = ref<boolean>(false);

const { notifyConfirmation, removeNotification, notifySuccess } =
  useNotificationSystem();

const verifyBeforeClear = async () => {
  const notificationId = "confirm-clear-editor";

  notifyConfirmation({
    id: notificationId,
    message: "Are you sure you want to delete the page?",
    confirm: {
      text: "O.K.",
      clickHandler: async (event: MouseEvent) => {
        loading.value = true;

        if (!editor.value) return;

        localStorage.removeItem("editor-lite");

        editor.value.clear();

        loading.value = false;
        removeNotification(notificationId);
      },
      classList: "confirm-action-button",
    },
    cancel: {
      text: "Cancel",
      clickHandler: (event: MouseEvent) => {
        removeNotification(notificationId);
      },
      classList: "cancel-action-button",
    },
  });
};

async function save() {
  if (!editor.value) return;
  loading.value = true;
  const editorData = await editor.value.save();
  localStorage.setItem("editor-lite", JSON.stringify(editorData));
  notifySuccess("Content Saved!", { autoClose: 1500 });
  loading.value = false;
}

onMounted(() => {
  loading.value = true;
  const data = localStorage.getItem("editor-lite");
  const blocks = data ? JSON.parse(data).blocks : [];
  editor.value = initializeEditor(blocks, {
    placeholder: "Start writing great content.....",
  });
  loading.value = false;
});
</script>

<style scoped></style>
