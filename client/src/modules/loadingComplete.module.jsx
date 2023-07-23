export default function timeout(states, timer) {
  setTimeout(() => {
    states.forEach((callback) => callback(false));
  }, timer);
}
