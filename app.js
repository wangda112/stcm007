const WECHAT_ID = "stcm007";
const toast = document.getElementById("toast");
let toastTimer;

async function copyWechat(openWechat = false) {
  try {
    await navigator.clipboard.writeText(WECHAT_ID);
  } catch {
    const input = document.createElement("input");
    input.value = WECHAT_ID;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }

  toast.querySelector("strong").textContent = "微信号已复制：stcm007";
  toast.querySelector("span").textContent = openWechat
    ? "正在尝试打开微信，请在搜索框粘贴"
    : "打开微信，在搜索框粘贴即可";
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);

  if (openWechat) {
    setTimeout(() => {
      window.location.href = "weixin://";
    }, 350);
  }
}

document.getElementById("copySmall").addEventListener("click", () => copyWechat(false));
document.getElementById("addWechat").addEventListener("click", () => copyWechat(true));
document.getElementById("mobileAdd").addEventListener("click", () => copyWechat(true));
