/* 
 * System Designer
 * http://systemdesigner.io
 * @ecarriou
 *
 * Copyright (C) 2016 - Erwan Carriou
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var ports = [];
onconnect = function (e) {
    var port = e.ports[0];
    ports.push(port);

    port.onmessage = function (event) {
        ports.forEach(function (p) {
            p.postMessage(event.data);
        });
    };
};