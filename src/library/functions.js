export const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));   
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


export const decodeHTMLEntities = (text) => {
    const entities = [
        ['amp', '&'],
        ['apos', '\''],
        
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#39', '\''],
        ['#039', '\''],
        ['#47', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"'],
    ];

    for (let i = 0, max = entities.length; i < max; ++i) 
        text = text.replace(new RegExp('&'+entities[i][0]+';', 'g'), entities[i][1]);

    return text;
}

