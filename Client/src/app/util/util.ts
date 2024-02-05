export function getCookie(key: string) {
    let cookieValue;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie.substring(0, key.length + 1) === (key + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(key.length + 1));
          break;
        }
      }
    }
    return cookieValue;
}

export function currencyFormat(ammount: number) {
    return '$' + (ammount/100).toFixed(2);
}