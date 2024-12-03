<template>
  <div class="editor-container">
    <div id="editor"></div>
    <div id="editor-content-controls">
      <button @click="save" :disabled="loading">Save</button>
      <button @click="verifyBeforeClear" :disabled="loading">Clear</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import EditorJS from "@editorjs/editorjs";
import { initializeEditor } from "./init";
import useNotificationSystem from "../../composables/useNotificationSystem/useNotificationSystem";

const editor = ref<EditorJS | null>(null);
const loading = ref<boolean>(false);

const verifyBeforeClear = async () => {
  const { notifyConfirmation, removeNotification } = useNotificationSystem();

  const notificationId = "confirm-clear-editor";

  notifyConfirmation({
    id: notificationId,
    message: "Are you sure you want to clear the page? This cannot be undone.",
    confirm: {
      text: "O.K.",
      clickHandler: async (event: MouseEvent) => {
        // TODO: SENTRY: log mouse event.
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
        // TODO: SENTRY: log mouse event.
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
  loading.value = false;
}

onMounted(() => {
  loading.value = true;
  const data = localStorage.getItem("editor-lite");
  const blocks = data ? JSON.parse(data).blocks : [];
  editor.value = initializeEditor(blocks);
  loading.value = false;
});
</script>

<style scoped>
#editor-content-controls {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
}
</style>
