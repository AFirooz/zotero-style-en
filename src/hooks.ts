import { BasicExampleFactory, UIExampleFactory } from "./modules/examples";
import { config } from "../package.json";
import { getString, initLocale } from "./modules/locale";
import { registerPrefsScripts } from "./modules/preferenceScript";
import Views from "./modules/views"; 
import { log } from "zotero-plugin-toolkit/dist/utils";
import Events from "./modules/events";

async function onStartup() {
  await Promise.all([
    Zotero.initializationPromise,
    Zotero.unlockPromise,
    Zotero.uiReadyPromise,
  ]);
  initLocale();
  ztoolkit.Tool.setIconURI(
    "default",
    `chrome://${config.addonRef}/content/icons/favicon.png`
  );

  // const popupWin = ztoolkit.Tool.createProgressWindow(config.addonName, {
  //   closeOnClick: true,
  //   closeTime: -1,
  // })
  //   .createLine({
  //     text: getString("startup.begin"),
  //     type: "default",
  //     progress: 0,
  //   })
  //   .show();

  // BasicExampleFactory.registerPrefs();

  // BasicExampleFactory.registerNotifier();

  // await Zotero.Promise.delay(1000);
  // popupWin.changeLine({
  //   progress: 30,
  //   text: `[30%] ${getString("startup.begin")}`,
  // });

  // UIExampleFactory.registerStyleSheet();

  // UIExampleFactory.registerRightClickMenuItem();

  // UIExampleFactory.registerRightClickMenuPopup();

  // UIExampleFactory.registerWindowMenuWithSeprator();

  // await UIExampleFactory.registerExtraColumn();

  // await UIExampleFactory.registerExtraColumnWithCustomCell();

  // await UIExampleFactory.registerCustomCellRenderer();

  // UIExampleFactory.registerLibraryTabPanel();

  // await UIExampleFactory.registerReaderTabPanel();

  // await Zotero.Promise.delay(1000);

  // popupWin.changeLine({
  //   progress: 100,
  //   text: `[100%] ${getString("startup.finish")}`,
  // });
  // popupWin.startCloseTimer(5000);
  ztoolkit.UI.enableElementRecordGlobal = false
  const views = new Views()
  await views.renderTitleProgress()
  await views.createTagColumn()
  await views.createProgressColumn()
  await views.createIFColumn()
  views.registerSwitchColumnsViewUI()

  const events = new Events()
  events.onInit()
}

function onShutdown(): void {
  BasicExampleFactory.unregisterPrefs();
  UIExampleFactory.unregisterUIExamples();
  // Remove addon object
  addon.data.alive = false;
  delete Zotero.AddonTemplate;
}

/**
 * This function is just an example of dispatcher for Notify events.
 * Any operations should be placed in a function to keep this funcion clear.
 */
async function onNotify(
  event: string,
  type: string,
  ids: Array<string>,
  extraData: { [key: string]: any }
) {
  // You can add your code to the corresponding notify type
  ztoolkit.Tool.log("notify", event, type, ids, extraData);
  if (
    event == "select" &&
    type == "tab" &&
    extraData[ids[0]].type == "reader"
  ) {
    BasicExampleFactory.exampleNotifierCallback();
  } else {
    return;
  }
}

/**
 * This function is just an example of dispatcher for Preference UI events.
 * Any operations should be placed in a function to keep this funcion clear.
 * @param type event type
 * @param data event data
 */
async function onPrefsEvent(type: string, data: { [key: string]: any }) {
  switch (type) {
    case "load":
      registerPrefsScripts(data.window);
      break;
    default:
      return;
  }
}

// Add your hooks here. For element click, etc.
// Keep in mind hooks only do dispatch. Don't add code that does real jobs in hooks.
// Otherwise the code would be hard to read and maintian.

export default {
  onStartup,
  onShutdown,
  onNotify,
  onPrefsEvent,
};
