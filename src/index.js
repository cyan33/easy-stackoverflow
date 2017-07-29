const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const query = 'http://stackoverflow.com/search?q='

const getQuestionUrl = () => {
  const question = $('.question').value.trim()
  return question ? query + question : false
}

const showMsg = msg => {
  const msgDiv = document.createElement('div')
  msgDiv.innerHTML = msg
  $('body').append(msgDiv)
}

const search = () => {
  const url = getQuestionUrl()
    
  if (!getQuestionUrl()) {
    showMsg('Please input a question')
    return
  }
  
  chrome.tabs.create({ url })
}

document.addEventListener('keydown', e => {
  if (e.keyCode === 13) search()
})
$('.search').addEventListener('click', search)
