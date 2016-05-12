/*
* System Designer
* https://system-designer.github.io
* @ecarriou
*
* Copyright 2016 Erwan Carriou
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

function openSystemDesigner() {
  chrome.windows.create({
    'url': chrome.extension.getURL('designer/index.html'),
    'type': 'popup',
    'width': 1024,
    'height': 768
  });
}

chrome.browserAction.onClicked.addListener(openSystemDesigner);