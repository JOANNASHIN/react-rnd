const images = Array.from(document.querySelectorAll("img"));
images.forEach(img => {
  img.addEventListener("click", () => {
    console.log('click', chrome.storage.local)
    console.log(document.body)
    chrome.storage.local.set({ image: img.src })
  })
})

// chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//   // 현재 활성화된 탭에 대한 정보가 tabs 배열에 들어옵니다.
//   if (tabs && tabs.length > 0) {
//     const activeTabInfo = tabs[0];
//     console.log(activeTabInfo);
//   }
// });