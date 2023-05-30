export function csrf_token() {
    const metaTags = document.getElementsByTagName('meta');

    for (let i = 0; i < metaTags.length; i++) {
      if (metaTags[i].getAttribute('name') === 'csrf-token') {
        return metaTags[i].getAttribute('content');
      }
    }

    return null;
  }
