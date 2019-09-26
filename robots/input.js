const readline = require('readline-sync')
const state = require('./state.js')

function robot()
{
    const content = 
    {
        maximumSentences: 7
    }
    
    content.searchTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()
    content.lang = askAndReturnLanguage()
    state.save(content)
    
    //await robots.text(content)
    
    function askAndReturnSearchTerm()
    {
        return readline.question('Type a Wikipedia search term: ')
    }
    
    function askAndReturnPrefix()
    {
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]        
        return selectedPrefixText
    }  
    
    //console.log(JSON.stringify(content, null, 4))
    
    function askAndReturnLanguage()
    {
        const language = ['pt', 'en', 'fr', 'es', 'ja', 'it']
        const selectedLangIndex = readline.keyInSelect(language, 'Choice Language: ')
        const selectedLangText = language[selectedLangIndex]
        
        return selectedLangText
    }    
    //console.log(content)
}

module.exports = robot

 