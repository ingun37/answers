import { Injectable } from '@angular/core';
import * as hljs from "highlight.js/lib/highlight";
import * as haskell from "highlight.js/lib/languages/haskell"

declare function marked(str: string, options:object);
declare var katex: any;

@Injectable({
  providedIn: 'root'
})
export class MDService {

  constructor() {
    hljs.registerLanguage('haskell', haskell);
  }

  md2HTML(mdStr: string): string {
    var displayTable = {};
    var table = {};
  
    const replacedMD = mdStr.replace(/^```math$([\s\S\n\r]+?)^```$/gm, (match, group) => {
      const randomID = makeid(16);
      displayTable[randomID] = group;
      return randomID;
    }).replace(/\$`(.+?)`\$/g, (match, group) => {
      const randomID = makeid(16);
      table[randomID] = group;
      return randomID;
    });
  
    var html = marked(replacedMD, {
      gfm: true,
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
    // var html = mdservice.compile(replacedMD);
    for (const key in displayTable) {
      if (displayTable.hasOwnProperty(key)) {
        const tex = displayTable[key];
        html = html.replace(key, katex.renderToString(tex, {displayMode: true}));
      }
    }
    for (const key in table) {
      if (table.hasOwnProperty(key)) {
        const tex = table[key];
        html = html.replace(key, katex.renderToString(tex));
      }
    }
    return html;
  }

  
}
function makeid(length) {
  let result           = '';
  const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}