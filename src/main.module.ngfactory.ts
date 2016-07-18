/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/app_module_factory';
import * as import1 from './main.module';
import * as import2 from '@angular/core/src/testability/testability';
import * as import3 from '@angular/core/src/application_ref';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/form_providers';
import * as import6 from '@angular/core/src/linker/component_resolver';
import * as import7 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import8 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import9 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import10 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import11 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import12 from '@angular/core/src/linker/view_utils';
import * as import13 from '@angular/core/src/linker/dynamic_component_loader';
import * as import14 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import15 from '@angular/core/src/di/injector';
import * as import16 from './app.component.ngfactory';
import * as import17 from './heroes.component.ngfactory';
import * as import18 from './hero-detail.component.ngfactory';
import * as import19 from '@angular/core/src/console';
import * as import20 from '@angular/core/src/application_common_providers';
import * as import21 from '@angular/core/src/application_tokens';
import * as import22 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import23 from '@angular/platform-browser/src/dom/events/key_events';
import * as import24 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import25 from '@angular/core/src/zone/ng_zone';
import * as import26 from '@angular/core/src/facade/exception_handler';
import * as import27 from '@angular/core/src/linker/component_factory_resolver';
import * as import28 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import29 from '@angular/platform-browser/src/dom/animation_driver';
import * as import30 from '@angular/core/src/render/api';
import * as import31 from '@angular/core/src/security';
import * as import32 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import33 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class MainModuleInjector extends import0.AppModuleInjector<import1.MainModule> {
  _NgZone_0:any;
  _ExceptionHandler_1:any;
  _Testability_2:import2.Testability;
  _ApplicationRef__3:import3.ApplicationRef_;
  _ApplicationRef_4:any;
  _MainModule_5:import1.MainModule;
  _BrowserModule_6:import4.BrowserModule;
  _FormsModule_7:import5.FormsModule;
  __ComponentResolver_8:import6.ReflectorComponentResolver;
  __ComponentFactoryResolver_9:any;
  __APP_ID_10:any;
  __DOCUMENT_11:any;
  __HAMMER_GESTURE_CONFIG_12:import7.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_13:any[];
  __EventManager_14:import8.EventManager;
  __DomSharedStylesHost_15:import9.DomSharedStylesHost;
  __AnimationDriver_16:any;
  __DomRootRenderer_17:import10.DomRootRenderer_;
  __RootRenderer_18:any;
  __DomSanitizationService_19:import11.DomSanitizationServiceImpl;
  __SanitizationService_20:any;
  __ViewUtils_21:import12.ViewUtils;
  __IterableDiffers_22:any;
  __KeyValueDiffers_23:any;
  __DynamicComponentLoader_24:import13.DynamicComponentLoader_;
  __SharedStylesHost_25:any;
  __RadioControlRegistry_26:import14.RadioControlRegistry;
  constructor(parent:import15.Injector) {
    super(parent,[
      import16.AppComponentNgFactory,
      import17.HeroesComponentNgFactory,
      import18.HeroDetailComponentNgFactory
    ]
    );
  }
  get _ComponentResolver_8():import6.ReflectorComponentResolver {
    if ((this.__ComponentResolver_8 == null)) { (this.__ComponentResolver_8 = new import6.ReflectorComponentResolver(this.parent.get(import19.Console))); }
    return this.__ComponentResolver_8;
  }
  get _ComponentFactoryResolver_9():any {
    if ((this.__ComponentFactoryResolver_9 == null)) { (this.__ComponentFactoryResolver_9 = import20._componentFactoryResolverFactory()); }
    return this.__ComponentFactoryResolver_9;
  }
  get _APP_ID_10():any {
    if ((this.__APP_ID_10 == null)) { (this.__APP_ID_10 = import21._appIdRandomProviderFactory()); }
    return this.__APP_ID_10;
  }
  get _DOCUMENT_11():any {
    if ((this.__DOCUMENT_11 == null)) { (this.__DOCUMENT_11 = import4._document()); }
    return this.__DOCUMENT_11;
  }
  get _HAMMER_GESTURE_CONFIG_12():import7.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_12 == null)) { (this.__HAMMER_GESTURE_CONFIG_12 = new import7.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_12;
  }
  get _EVENT_MANAGER_PLUGINS_13():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_13 == null)) { (this.__EVENT_MANAGER_PLUGINS_13 = [
      new import22.DomEventsPlugin(),
      new import23.KeyEventsPlugin(),
      new import7.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_12)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_13;
  }
  get _EventManager_14():import8.EventManager {
    if ((this.__EventManager_14 == null)) { (this.__EventManager_14 = new import8.EventManager(this._EVENT_MANAGER_PLUGINS_13,this._NgZone_0)); }
    return this.__EventManager_14;
  }
  get _DomSharedStylesHost_15():import9.DomSharedStylesHost {
    if ((this.__DomSharedStylesHost_15 == null)) { (this.__DomSharedStylesHost_15 = new import9.DomSharedStylesHost(this._DOCUMENT_11)); }
    return this.__DomSharedStylesHost_15;
  }
  get _AnimationDriver_16():any {
    if ((this.__AnimationDriver_16 == null)) { (this.__AnimationDriver_16 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_16;
  }
  get _DomRootRenderer_17():import10.DomRootRenderer_ {
    if ((this.__DomRootRenderer_17 == null)) { (this.__DomRootRenderer_17 = new import10.DomRootRenderer_(this._DOCUMENT_11,this._EventManager_14,this._DomSharedStylesHost_15,this._AnimationDriver_16)); }
    return this.__DomRootRenderer_17;
  }
  get _RootRenderer_18():any {
    if ((this.__RootRenderer_18 == null)) { (this.__RootRenderer_18 = import24._createConditionalRootRenderer(this._DomRootRenderer_17)); }
    return this.__RootRenderer_18;
  }
  get _DomSanitizationService_19():import11.DomSanitizationServiceImpl {
    if ((this.__DomSanitizationService_19 == null)) { (this.__DomSanitizationService_19 = new import11.DomSanitizationServiceImpl()); }
    return this.__DomSanitizationService_19;
  }
  get _SanitizationService_20():any {
    if ((this.__SanitizationService_20 == null)) { (this.__SanitizationService_20 = this._DomSanitizationService_19); }
    return this.__SanitizationService_20;
  }
  get _ViewUtils_21():import12.ViewUtils {
    if ((this.__ViewUtils_21 == null)) { (this.__ViewUtils_21 = new import12.ViewUtils(this._RootRenderer_18,this._APP_ID_10,this._SanitizationService_20)); }
    return this.__ViewUtils_21;
  }
  get _IterableDiffers_22():any {
    if ((this.__IterableDiffers_22 == null)) { (this.__IterableDiffers_22 = import20._iterableDiffersFactory()); }
    return this.__IterableDiffers_22;
  }
  get _KeyValueDiffers_23():any {
    if ((this.__KeyValueDiffers_23 == null)) { (this.__KeyValueDiffers_23 = import20._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_23;
  }
  get _DynamicComponentLoader_24():import13.DynamicComponentLoader_ {
    if ((this.__DynamicComponentLoader_24 == null)) { (this.__DynamicComponentLoader_24 = new import13.DynamicComponentLoader_(this._ComponentResolver_8)); }
    return this.__DynamicComponentLoader_24;
  }
  get _SharedStylesHost_25():any {
    if ((this.__SharedStylesHost_25 == null)) { (this.__SharedStylesHost_25 = this._DomSharedStylesHost_15); }
    return this.__SharedStylesHost_25;
  }
  get _RadioControlRegistry_26():import14.RadioControlRegistry {
    if ((this.__RadioControlRegistry_26 == null)) { (this.__RadioControlRegistry_26 = new import14.RadioControlRegistry()); }
    return this.__RadioControlRegistry_26;
  }
  createInternal():import1.MainModule {
    this._NgZone_0 = import3.createNgZone(this.parent.get(import25.NgZone,null));
    this._ExceptionHandler_1 = import4._exceptionHandler();
    this._Testability_2 = new import2.Testability(this._NgZone_0);
    this._ApplicationRef__3 = new import3.ApplicationRef_(this.parent.get(import3.PlatformRef_),this._NgZone_0,this.parent.get(import19.Console),this,this._ExceptionHandler_1,this,this.parent.get(import2.TestabilityRegistry,null),this._Testability_2,this.parent.get(import21.APP_INITIALIZER,null));
    this._ApplicationRef_4 = this._ApplicationRef__3;
    this._MainModule_5 = new import1.MainModule(this._ApplicationRef_4);
    this._BrowserModule_6 = new import4.BrowserModule();
    this._FormsModule_7 = new import5.FormsModule();
    return this._MainModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import25.NgZone)) { return this._NgZone_0; }
    if ((token === import26.ExceptionHandler)) { return this._ExceptionHandler_1; }
    if ((token === import2.Testability)) { return this._Testability_2; }
    if ((token === import3.ApplicationRef_)) { return this._ApplicationRef__3; }
    if ((token === import3.ApplicationRef)) { return this._ApplicationRef_4; }
    if ((token === import1.MainModule)) { return this._MainModule_5; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_6; }
    if ((token === import5.FormsModule)) { return this._FormsModule_7; }
    if ((token === import6.ComponentResolver)) { return this._ComponentResolver_8; }
    if ((token === import27.ComponentFactoryResolver)) { return this._ComponentFactoryResolver_9; }
    if ((token === import21.APP_ID)) { return this._APP_ID_10; }
    if ((token === import28.DOCUMENT)) { return this._DOCUMENT_11; }
    if ((token === import7.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_12; }
    if ((token === import8.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_13; }
    if ((token === import8.EventManager)) { return this._EventManager_14; }
    if ((token === import9.DomSharedStylesHost)) { return this._DomSharedStylesHost_15; }
    if ((token === import29.AnimationDriver)) { return this._AnimationDriver_16; }
    if ((token === import10.DomRootRenderer)) { return this._DomRootRenderer_17; }
    if ((token === import30.RootRenderer)) { return this._RootRenderer_18; }
    if ((token === import11.DomSanitizationService)) { return this._DomSanitizationService_19; }
    if ((token === import31.SanitizationService)) { return this._SanitizationService_20; }
    if ((token === import12.ViewUtils)) { return this._ViewUtils_21; }
    if ((token === import32.IterableDiffers)) { return this._IterableDiffers_22; }
    if ((token === import33.KeyValueDiffers)) { return this._KeyValueDiffers_23; }
    if ((token === import13.DynamicComponentLoader)) { return this._DynamicComponentLoader_24; }
    if ((token === import9.SharedStylesHost)) { return this._SharedStylesHost_25; }
    if ((token === import14.RadioControlRegistry)) { return this._RadioControlRegistry_26; }
    return notFoundResult;
  }
}
export const MainModuleNgFactory:import0.AppModuleFactory<import1.MainModule> = new import0.AppModuleFactory(MainModuleInjector,import1.MainModule);