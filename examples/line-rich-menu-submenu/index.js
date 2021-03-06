module.exports = async function App(context) {
  if (context.event.text === 'A') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_A_ID);
  } else if (context.event.text === 'B') {
    await context.linkRichMenu(process.env.SUB_RICH_MENU_B_ID);
  } else if (context.event.text === 'Back') {
    await context.linkRichMenu(process.env.MAIN_RICH_MENU_ID);
  } else {
    await context.sendText(`User have clicked ${context.event.text}`);
  }
};
