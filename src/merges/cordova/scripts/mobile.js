/*
 * System Designer
 *
 * https://designfirst.io/systemdesigner/
 *
 * Copyright 2024 Erwan Carriou
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady() {
  StatusBar.hide()
}

document.addEventListener('menubutton', onMenuButton, false)
function onMenuButton() {
  if (document.location.href.indexOf('/app/') !== -1) {
    document.location.href =
      '../index.html?messages=' + encodeURIComponent(JSON.stringify(mess))
  } else {
    document.location.href =
      'index.html?messages=' + encodeURIComponent(JSON.stringify(mess))
  }
}

document.addEventListener('backbutton', systemDesignerBack, false)
function systemDesignerBack() {
  var mess =
      typeof messages !== 'undefined'
        ? messages
        : runtime.require('state').messages(),
    ref =
      typeof lastPage !== 'undefined'
        ? lastPage
        : runtime.require('state').lastPage()

  if (document.location.href.indexOf('/app/') !== -1) {
    document.location.href =
      '../' + ref + '?messages=' + encodeURIComponent(JSON.stringify(mess))
  } else {
    document.location.href =
      ref + '?messages=' + encodeURIComponent(JSON.stringify(mess))
  }
}
