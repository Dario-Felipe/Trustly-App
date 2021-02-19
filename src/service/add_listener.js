// eslint-disable-next-line no-undef
export default PayWithMyBank.addPanelListener((command, event) => {
  if (command === 'event' && event.type === 'new_location') {
    if (event.data.indexOf('#success') === 0) {
      window.location.href = '/';
    }
  }
  return false;
});
