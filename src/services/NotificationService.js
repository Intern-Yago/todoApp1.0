import * as Notifications from "expo-notifications";
async function createNotification(hashTodo, todoText) {
    let minute = new Date().getMinutes() + 1
    console.log(minute);
  let triggerNotification={
    hour: new Date().getHours(),
    minute: new Date().getMinutes() + 1,
    repeats: true,
  }

  await Notifications.scheduleNotificationAsync({
    content: {
      title: "Lembrete de tarefa:",
      body: `${todoText}`,
    },
    identifier: `${hashTodo}`,
    trigger: triggerNotification,
  }).then((id) => {
    console.log(id);
  });
}

async function deleteNotification(hashTodo) {
  await Notifications.cancelScheduledNotificationAsync(hashTodo).then(() => {
    console.log("Exclusão feita!");
  });
}

export default {
  createNotification,
  deleteNotification,
};