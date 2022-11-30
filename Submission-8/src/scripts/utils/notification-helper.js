const NotificationHelper = {
  sendNotification({ title, options }) {
    const isAvailable = this._checkAvailability();
    const isPermitted = this._checkPermission();

    if (!isAvailable) {
      console.log('Notification not supported in this browser');
      return;
    }

    if (!isPermitted) {
      console.log('User did not yet granted permission');
      this._requestPermission();
      return;
    }

    this._showNotification({ title, options });
  },

  _checkAvailability() {
    return 'Notification' in window;
  },

  _checkPermission() {
    return Notification.permission === 'granted';
  },

  async _requestPermission() {
    const status = await Notification.requestPermission();

    if (status === 'denied') {
      console.log('Notification Denied');
    }

    if (status === 'default') {
      console.log('Permission closed');
    }
  },

  async _showNotification({ title, options }) {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    serviceWorkerRegistration.showNotification(title, options);
  },
};

export default NotificationHelper;
