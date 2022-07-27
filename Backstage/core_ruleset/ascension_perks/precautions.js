module.exports = {
   ident: 'precautions',

   name: '$ap_precautions',
   description: '$ap_precautions_desc',

   modifier: {
      costReductions: {
         'init_skills': -0.5
      }
   },
   events: [
      (gameContext, ui) => {
         gameContext.fn.updatePlayerAttributes('skillPoints', 500)
         ui.fn.requestUpdate(ui, 'attributes')
      }
   ]
}
