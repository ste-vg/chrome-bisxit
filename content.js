var elements = []; 
var elements = document.getElementsByTagName('*');

let replacements = [
    ['no-deal Brexit', 'soggy biscuit'],
    ['no-deal brexit', 'soggy biscuit'],
    ['brexit', 'biscuits'],
    ['backstop', 'custard cream'],
    ['customs union', 'International Baked Goods Alliance'],
    ['hard border', 'Jaffa Cake'],
    ['single Market', 'Bake Sale'],
    ['single market', 'Bake Sale']
]

let onTopic = [
    ['Labour', 'McVitie\'s'],
    ['Labour MP', 'McVitie\'s employee'],
    ['Labour MPs', 'McVitie\'s employees'],
    ['Conservative MPs', 'Fox\'s Biscuits employees'],
    ['Conservative MP', 'Fox\'s Biscuits employee'],
    ['Conservative', 'Fox\'s Biscuits'],
    ['MPs', 'biscuit lovers'],
    ['referendum', 'cake sale'],
    ['meaningful vote', 'bake off'],
    ['article 50', 'tea & biscuits']
]

let end = replacements.length;

for(var i = 0; i < end; i++)
{
    let words = replacements[i];
    let caps = [words[0].charAt(0).toUpperCase() + words[0].slice(1), words[1].charAt(0).toUpperCase() + words[1].slice(1)];

    replacements.push(caps)
}

end = onTopic.length;

for(var i = 0; i < end; i++)
{
    let words = onTopic[i];
    let caps = [words[0].charAt(0).toUpperCase() + words[0].slice(1), words[1].charAt(0).toUpperCase() + words[1].slice(1)];

    onTopic.push(caps)
}

// console.log(replacements)

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {

            
            var text = node.nodeValue;

            replacements.map(words => text = replace(words))

            if(text != node.nodeValue) onTopic.map(words => text = replace(words))

            element.replaceChild(document.createTextNode(text), node);
            
        }
    }
}

function replace(words)
{
    return text.replace(RegExp(words[0], 'g'), words[1]);
}
