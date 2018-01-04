import ua from './util/ua.js'

// let compare_y = (evt) => {
//   let touchObj,
//     touchstartY,
//     touchendY
//   document.addEventListener('touchstart', (e) => {
//     touchObj = e.changedTouches[0]
//     touchstartY = touchObj.pageY // Y座標
//   })
//   document.addEventListener('touchend', (e) => {
//     touchObj = e.changedTouches[0]
//     touchendY = touchObj.pageY // Y座標
//     if (touchstartY === touchendY) {
//       e.target.dispatchEvent(evt)
//     }
//   })
// }
// let touchDecision = () => {
//   if (!ua.Mobile && !ua.Tablet) return
//   let custom = new CustomEvent('tap')
//   compare_y(custom)
// }

window.onload = () => {

  let data_list = [
        {id: 0, name: 'hoge', state:'wip'},
        {id: 1, name: 'piyo', state:'wip'},
        {id: 2, name: 'fuga', state:'done'}
      ],
      idCache = 3

  let createDom = (doc, itemName, itemId, append_target) => {
    let $li = doc.createElement('li'),
        listTextNode = doc.createTextNode(itemName),
        $checkBox = doc.createElement('input'),
        $button = doc.createElement('button'),
        buttonTextNode = doc.createTextNode('delete')
    $li.className = 'list'
    $li.setAttribute('data-list-item', itemId)
    $checkBox.className = 'check_box'
    $checkBox.setAttribute('type', 'checkbox')
    $checkBox.setAttribute('data-check-box', itemId)
    $button.className = 'button_delete'
    $button.setAttribute('data-delete-button', itemId)
    $button.appendChild(buttonTextNode)
    $li.appendChild($checkBox)
    $li.appendChild(listTextNode)
    $li.appendChild($button)
    append_target.appendChild($li)
  }

  let addEventAddItem = () => {
    let form = document.getElementById('addForm'),
      $input = document.getElementById('addInput'),
      $button = document.getElementById('addButton'),
      addItemData = (newData) => {
        data_list.push({id:idCache, name:newData})
      },
      addItemDom = (newData) => {
        let doc = document,
            listBox = doc.getElementById('listBox')
        createDom(doc, newData, idCache, listBox)
      },
      listener = (e) => {
        e.preventDefault()
        e.stopPropagation()
        let target = form.addInput,
            targetValue = target.value
        if(e.keyCode && e.keyCode !== 13 || targetValue === '') return
        addItemData(targetValue)
        addItemDom(targetValue)
        idCache++
        target.value = ''
        target.blur()
      }
    $button.addEventListener('click', listener, false)
    $input.addEventListener('keyup', listener, false)
  }

  let createList = () => {
    let doc = document,
      listBox = doc.getElementById('listBox'),
      fragment = doc.createDocumentFragment(),
      deleteItemData = (itemId) => {
        let _data_list = data_list
        for(let i = 0; i < _data_list.length; i++){
          if(_data_list[i].id === parseInt(itemId)) {
            data_list.splice(i, 1)
          }
        }
      },
      deleteItemDom = (itemId, targetDom) => {
        for(let i = 0; i < targetDom.length; i++) {
          let currentTargetDom = targetDom[i]
          if (currentTargetDom.getAttribute('data-list-item') === itemId) {
            currentTargetDom.parentNode.removeChild(currentTargetDom);
          }
        }
      },
      changeItemState = (itemId, checked, targetDom) => {
        let _data_list = data_list
        for(let i = 0; i < _data_list.length; i++){
          if(_data_list[i].id === parseInt(itemId)) {
            data_list[i].state = checked ? 'done' : 'yet'
          }
        }
        for(let index = 0; index < targetDom.length; index++) {
          let currentTargetDom = targetDom[index],
              className = checked ? 'list is_done' : 'list'
          if (currentTargetDom.getAttribute('data-list-item') === itemId) {
            currentTargetDom.className = className
          }
        }
      }
    for(let i = 0; i < data_list.length; i++) {
      createDom(doc, data_list[i].name, data_list[i].id, fragment)
    }
    listBox.appendChild(fragment)
    listBox.addEventListener('click', (e) => {
      let trigger = e.target,
        targetDom = document.querySelectorAll('[data-list-item]')
      if(trigger.hasAttribute('data-delete-button')) {
        let itemId = trigger.getAttribute('data-delete-button')
        deleteItemData(itemId)
        deleteItemDom(itemId, targetDom)
      } else if(trigger.hasAttribute('data-check-box')) {
        let itemId = trigger.getAttribute('data-check-box'),
          checked = trigger.checked
        changeItemState(itemId, checked, targetDom)
      }
    })
  }

  let toggleMenu = () => {
    let trigger = document.getElementById('buttton_menu')
    console.log(trigger)
  }

  // createList()
  // addEventAddItem()
  //
  toggleMenu()
}
