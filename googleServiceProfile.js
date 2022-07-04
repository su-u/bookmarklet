// Googleのサービスを特定のプロファイルで開き直す
const profile = '1';

const url = new URL(location);
url.searchParams.set('authuser', profile);
location.href = url.toString();
