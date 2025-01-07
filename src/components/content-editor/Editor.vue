<template>
  <div class="editor-container">
    <div id="editor"></div>
    <div id="editor-content-controls">
      <button id="save-button" @click="save" :disabled="loading">
        <SaveIcon />
      </button>
      <button id="clear-button" @click="verifyBeforeClear" :disabled="loading">
        <TrashIcon />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import EditorJS from "@editorjs/editorjs";
import useNotificationSystem from "../../composables/useNotificationSystem";
import { initializeEditor } from "./init";
import SaveIcon from "../icons/SaveIcon.vue";
import TrashIcon from "../icons/TrashIcon.vue";

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
      clickHandler: async (_event: MouseEvent) => {
        loading.value = true;

        if (!editor.value) return;

        localStorage.removeItem("editor-lite");

        editor.value.clear();
        window.location.reload;

        loading.value = false;
        removeNotification(notificationId);
      },
      classList: "confirm-action-button",
    },
    cancel: {
      text: "Cancel",
      clickHandler: (_event: MouseEvent) => {
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
  notifySuccess("Saved!", { autoClose: 1500 });
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

<style scoped lang="scss">
#editor-content-controls {
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(-10%);
  z-index: 2;
  background-color: rgba(211, 211, 211, 0.6);
  border-radius: 0 0 0.5rem 0.5rem;

  #save-button,
  #clear-button {
    border: none;
    background: transparent;
  }

  #save-button:hover,
  #clear-button:hover {
    cursor: pointer;
  }
}

.confirm-button-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
}

.cancel-action-button,
.confirm-action-button {
  padding: 0.5rem 1rem;
  font-weight: 600;
}
</style>
