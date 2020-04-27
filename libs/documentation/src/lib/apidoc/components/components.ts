const COMPONENTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "DialogPosition",
            "id": "interface-DialogPosition-907bb375e34a5ecc5ba8d9ea1022c9aa",
            "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
            "type": "interface",
            "sourceCode": "import {ViewContainerRef} from '@angular/core';\r\nimport {Direction} from '@angular/cdk/bidi';\r\nimport {ScrollStrategy} from '@angular/cdk/overlay';\r\n\r\n/** Valid ARIA roles for a dialog element. */\r\nexport type DialogRole = 'dialog' | 'alertdialog';\r\n\r\n/** Possible overrides for a dialog's position. */\r\nexport interface DialogPosition {\r\n  /** Override for the dialog's top position. */\r\n  top?: string;\r\n\r\n  /** Override for the dialog's bottom position. */\r\n  bottom?: string;\r\n\r\n  /** Override for the dialog's left position. */\r\n  left?: string;\r\n\r\n  /** Override for the dialog's right position. */\r\n  right?: string;\r\n}\r\n\r\n/**\r\n * Configuration for opening a modal dialog with the SdsDialog service.\r\n */\r\nexport class SdsDialogConfig<D = any> {\r\n\r\n  /**\r\n   * Where the attached component should live in Angular's *logical* component tree.\r\n   * This affects what is available for injection and the change detection order for the\r\n   * component instantiated inside of the dialog. This does not affect where the dialog\r\n   * content will be rendered.\r\n   */\r\n  viewContainerRef?: ViewContainerRef;\r\n\r\n  /** ID for the dialog. If omitted, a unique one will be generated. */\r\n  id?: string;\r\n\r\n  /** The ARIA role of the dialog element. */\r\n  role?: DialogRole = 'dialog';\r\n\r\n  /** Custom class for the overlay pane. */\r\n  panelClass?: string | string[] = '';\r\n\r\n  /** Whether the dialog has a backdrop. */\r\n  hasBackdrop? = true;\r\n\r\n  /** Custom class for the backdrop, */\r\n  backdropClass? = '';\r\n\r\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\r\n  disableClose? = false;\r\n\r\n  /** Width of the dialog. */\r\n  width? = '';\r\n\r\n  /** Height of the dialog. */\r\n  height? = '';\r\n\r\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\r\n  minWidth?: number | string;\r\n\r\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  minHeight?: number | string;\r\n\r\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\r\n  maxWidth?: number | string = '80vw';\r\n\r\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  maxHeight?: number | string;\r\n\r\n  /** Position overrides. */\r\n  position?: DialogPosition;\r\n\r\n  /** Data being injected into the child component. */\r\n  data?: D | null = null;\r\n\r\n  /** Layout direction for the dialog's content. */\r\n  direction?: Direction;\r\n\r\n  /** ID of the element that describes the dialog. */\r\n  ariaDescribedBy?: string | null = null;\r\n\r\n  /** Aria label to assign to the dialog element */\r\n  ariaLabel?: string | null = null;\r\n\r\n  /** Whether the dialog should focus the first focusable element on open. */\r\n  autoFocus? = true;\r\n\r\n  /**\r\n   * Whether the dialog should restore focus to the\r\n   * previously-focused element, after it's closed.\r\n   */\r\n  restoreFocus? = true;\r\n\r\n  /** Scroll strategy to be used for the dialog. */\r\n  scrollStrategy?: ScrollStrategy;\r\n\r\n  /**\r\n   * Whether the dialog should close when the user goes backwards/forwards in history.\r\n   * Note that this usually doesn't include clicking on links (unless the user is using\r\n   * the `HashLocationStrategy`).\r\n   */\r\n  closeOnNavigation? = true;\r\n\r\n  /**\r\n   * Wheter the dialog its an alert\r\n   */\r\n  alert?: 'warning' | 'info' | 'error';\r\n}\r\n",
            "properties": [
                {
                    "name": "bottom",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s bottom position. </p>\n",
                    "line": 14
                },
                {
                    "name": "left",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s left position. </p>\n",
                    "line": 17
                },
                {
                    "name": "right",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s right position. </p>\n",
                    "line": 20
                },
                {
                    "name": "top",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Override for the dialog&#39;s top position. </p>\n",
                    "line": 11
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Possible overrides for a dialog&#39;s position. </p>\n",
            "methods": []
        },
        {
            "name": "FooterLogo",
            "id": "interface-FooterLogo-b8fd27d6792cc808383c3a01ede94119",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "interface",
            "sourceCode": "import {\r\n  INavigationLink,\r\n  NavigationMode\r\n} from '../../common-navigation/common-navigation-model';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n}\r\n",
            "properties": [
                {
                    "name": "imageAltText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Alt text for image</p>\n",
                    "line": 65
                },
                {
                    "name": "imageSourcePath",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Image Source Path for the Image button</p>\n",
                    "line": 59
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 53
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "HeaderModel",
            "id": "interface-HeaderModel-8d4a050da69c1131be192d3f5c973365",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "home",
                    "type": "HeaderHome",
                    "optional": false,
                    "description": "<p>Header logo and header logo home link</p>\n",
                    "line": 9
                },
                {
                    "name": "navigationLinks",
                    "type": "HeaderNavigationLink[]",
                    "optional": false,
                    "description": "<p>List of main navigaation links/drop downs</p>\n",
                    "line": 19
                },
                {
                    "name": "secondaryLinks",
                    "type": "HeaderSecondaryLink[]",
                    "optional": false,
                    "description": "<p>List of secondary links</p>\n",
                    "line": 14
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "INavigationLink",
            "id": "interface-INavigationLink-da5dce1c3233639ed105400f0995f5e5",
            "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts",
            "type": "interface",
            "sourceCode": "export interface INavigationLink {\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n}\r\n\r\nexport enum NavigationMode {\r\n    INTERNAL, EXTERNAL, EVENT, LABEL\r\n}\r\n\r\nexport interface Selectable {\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 15
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route </p>\n",
                    "line": 10
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 5
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "InitPxVideoConfig",
            "id": "interface-InitPxVideoConfig-f7322da02d1e2bd076eb1bdf5afbd29c",
            "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
            "type": "interface",
            "sourceCode": "import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';\r\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\r\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\r\nimport { VPInterface } from './video-player';\r\n\r\ninterface InitPxVideoConfig {\r\n  \"videoId\": string,\r\n  \"captionsOnDefault\": boolean,\r\n  \"seekInterval\": number,\r\n  \"videoTitle\": string,\r\n  \"debug\": boolean\r\n}\r\n\r\ndeclare const GLOBAL_STRINGS: any;\r\n\r\ndeclare class InitPxVideo {\r\n  constructor(config: InitPxVideoConfig);\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-video-player',\r\n  templateUrl: './video-player.component.html',\r\n  styleUrls: ['./css/px-video.css'],\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class SdsVideoPlayerComponent implements AfterViewInit {\r\n  @Input() VPConfiguration: VPInterface;\r\n  private config: InitPxVideoConfig;\r\n\r\n  ngAfterViewInit() {\r\n    this.config = {\r\n      videoId: this.VPConfiguration.id,\r\n      captionsOnDefault: false,\r\n      seekInterval: this.VPConfiguration.seekInterval,\r\n      videoTitle: 'Video Player',\r\n      debug: this.VPConfiguration.debug\r\n    }\r\n\r\n    new InitPxVideo(this.config);\r\n  }\r\n\r\n  constructor() {\r\n}\r\n\r\n}\r\n",
            "properties": [
                {
                    "name": "captionsOnDefault",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "debug",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "seekInterval",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "videoId",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "videoTitle",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 10
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SdsAccordionBase",
            "id": "interface-SdsAccordionBase-ca0e37bbf3f8daf884e5f76775977ee2",
            "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
            "type": "interface",
            "sourceCode": "import {InjectionToken} from '@angular/core';\r\nimport {CdkAccordion} from '@angular/cdk/accordion';\r\n\r\n/** Accordion's display modes. */\r\nexport type SdsAccordionDisplayMode = 'default' | 'basic';\r\n\r\n/**\r\n * Base interface for a `SdsAccordion`.\r\n */\r\nexport interface SdsAccordionBase extends CdkAccordion {\r\n  /** Display mode used for all accordion items in the accordion. */\r\n  displayMode: SdsAccordionDisplayMode;\r\n\r\n  /** Handles keyboard events coming in from the item headers. */\r\n  _handleHeaderKeydown: (event: KeyboardEvent) => void;\r\n\r\n  /** Handles focus events on the item headers. */\r\n  _handleHeaderFocus: (header: any) => void;\r\n}\r\n\r\n\r\n/**\r\n * Token used to provide a `SdsAccordion` to `SdsAccordionItem`.\r\n * Used primarily to avoid circular imports between `SdsAccordion` and `SdsAccordionItem`.\r\n */\r\nexport const SDS_ACCORDION = new InjectionToken<SdsAccordionBase>('SDS_ACCORDION');\r\n",
            "properties": [
                {
                    "name": "_handleHeaderFocus",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Handles focus events on the item headers. </p>\n",
                    "line": 19
                },
                {
                    "name": "_handleHeaderKeydown",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Handles keyboard events coming in from the item headers. </p>\n",
                    "line": 16
                },
                {
                    "name": "displayMode",
                    "type": "SdsAccordionDisplayMode",
                    "optional": false,
                    "description": "<p>Display mode used for all accordion items in the accordion. </p>\n",
                    "line": 13
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Base interface for a <code>SdsAccordion</code>.</p>\n",
            "methods": [],
            "extends": "CdkAccordion"
        },
        {
            "name": "SDSAutocompleteServiceInterface",
            "id": "interface-SDSAutocompleteServiceInterface-b94ad59f46be0ed842cf369dcc2b3610",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport interface SDSAutocompleteServiceInterface {\r\n    /**\r\n     * \r\n     * @param searchValue \r\n     */\r\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\r\n}\r\n\r\nexport interface SDSHiercarchicalServiceResult {\r\n    /**\r\n     * \r\n     */\r\n    items: object[];\r\n\r\n    /**\r\n     * \r\n     */\r\n    totalItems: number;\r\n}\r\n\r\nexport class SDSHiercarchicalServiceSearchItem {\r\n\r\n    /**\r\n     * \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    searchValue: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    // sort: Sort;\r\n\r\n    /**\r\n     * \r\n     */\r\n    currentItemCount: number;\r\n}\r\n\r\n",
            "properties": [],
            "indexSignatures": [],
            "kind": 152,
            "methods": [
                {
                    "name": "getDataByText",
                    "args": [
                        {
                            "name": "currentItems",
                            "type": "number"
                        },
                        {
                            "name": "searchValue",
                            "type": "string",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SDSHiercarchicalServiceResult>",
                    "typeParameters": [],
                    "line": 7,
                    "description": "",
                    "jsdoctags": [
                        {
                            "name": "currentItems",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": {
                                "pos": 120,
                                "end": 131,
                                "flags": 0,
                                "escapedText": "searchValue"
                            },
                            "type": "string",
                            "optional": true,
                            "tagName": {
                                "pos": 114,
                                "end": 119,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        },
        {
            "name": "SDSHiercarchicalServiceResult",
            "id": "interface-SDSHiercarchicalServiceResult-b94ad59f46be0ed842cf369dcc2b3610",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "interface",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport interface SDSAutocompleteServiceInterface {\r\n    /**\r\n     * \r\n     * @param searchValue \r\n     */\r\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\r\n}\r\n\r\nexport interface SDSHiercarchicalServiceResult {\r\n    /**\r\n     * \r\n     */\r\n    items: object[];\r\n\r\n    /**\r\n     * \r\n     */\r\n    totalItems: number;\r\n}\r\n\r\nexport class SDSHiercarchicalServiceSearchItem {\r\n\r\n    /**\r\n     * \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    searchValue: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    // sort: Sort;\r\n\r\n    /**\r\n     * \r\n     */\r\n    currentItemCount: number;\r\n}\r\n\r\n",
            "properties": [
                {
                    "name": "items",
                    "type": "object[]",
                    "optional": false,
                    "description": "",
                    "line": 14
                },
                {
                    "name": "totalItems",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 19
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "SdsMenuInterface",
            "id": "interface-SdsMenuInterface-7d2664220b4195c4461326237a57e000",
            "file": "libs/packages/components/src/lib/menu/menu.component.ts",
            "type": "interface",
            "sourceCode": "import {\r\n  AfterContentInit,\r\n  ChangeDetectionStrategy,\r\n  Component,\r\n  ElementRef,\r\n  EventEmitter,\r\n  InjectionToken,\r\n  Input,\r\n  OnDestroy,\r\n  Output,\r\n  TemplateRef,\r\n  ViewChild,\r\n  ViewEncapsulation,\r\n  OnInit\r\n} from '@angular/core';\r\nimport { AnimationEvent } from '@angular/animations';\r\nimport {\r\n  ESCAPE,\r\n  DOWN_ARROW,\r\n  UP_ARROW,\r\n  HOME,\r\n  END,\r\n  hasModifierKey\r\n} from '@angular/cdk/keycodes';\r\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\r\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\r\nimport { Subscription } from 'rxjs';\r\nimport { sdsMenuAnimations } from './menu-animations';\r\nimport { SdsMenuItemComponent } from './menu-item.component';\r\n\r\n/** Menu Positions */\r\nexport type MenuPositionX = 'before' | 'after';\r\nexport type MenuPositionY = 'above' | 'below';\r\n\r\n/** Menu available sizes */\r\n// sm = 'small'\r\nexport type MenuSizes = 'sm';\r\n\r\n/** Injection token used to provide the parent menu to menu items. */\r\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n);\r\n\r\n/** Menu Interface */\r\nexport interface SdsMenuInterface<T = any> {\r\n  xPosition: MenuPositionX;\r\n  yPosition: MenuPositionY;\r\n  overlapTrigger: boolean;\r\n  templateRef: TemplateRef<any>;\r\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\r\n  parentMenu?: SdsMenuInterface;\r\n  size?: MenuSizes;\r\n  focusFirstItem: (origin?: FocusOrigin) => void;\r\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\r\n  addItem?: (item: T) => void;\r\n  insertItem?: (item: T, index: number) => void;\r\n  removeItem?: (item: T) => void;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-menu',\r\n  exportAs: 'sdsMenu',\r\n  templateUrl: 'menu.component.html',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  encapsulation: ViewEncapsulation.None,\r\n  animations: [sdsMenuAnimations.transformMenu],\r\n  providers: [\r\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\r\n  ]\r\n})\r\nexport class SdsMenuComponent\r\n  implements\r\n    OnInit,\r\n    AfterContentInit,\r\n    OnDestroy,\r\n    SdsMenuInterface<SdsMenuItemComponent> {\r\n  /** After | Before the menu triger element */\r\n  private _xPosition: MenuPositionX = 'after';\r\n\r\n  /** Above | Below the menu triger element */\r\n  private _yPosition: MenuPositionY = 'below';\r\n\r\n  /** Manage browser focus */\r\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\r\n\r\n  /** Menu items inside the current menu. */\r\n  private _items: SdsMenuItemComponent[] = [];\r\n\r\n  /** Subscription to tab events on the menu panel */\r\n  private _tabSubscription = Subscription.EMPTY;\r\n\r\n  /** Stores <sds-menu> classes */\r\n  private _previousPanelClass: string;\r\n\r\n  /** Config object to be passed into the menu's ngClass */\r\n  _classList: { [key: string]: boolean } = {};\r\n\r\n  /** Current state of the panel animation. */\r\n  _panelAnimationState: 'void' | 'enter' = 'void';\r\n\r\n  /** Grab the component template */\r\n  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;\r\n\r\n  /**\r\n   * Size of menu component.\r\n   * Affects the font-size of the menu items and\r\n   * the size of the close button in the menu header\r\n   */\r\n  @Input() size: MenuSizes;\r\n\r\n  /** Position of the menu in the X axis. */\r\n  @Input()\r\n  get xPosition(): MenuPositionX {\r\n    return this._xPosition;\r\n  }\r\n  set xPosition(value: MenuPositionX) {\r\n    this._xPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Position of the menu in the Y axis. */\r\n  @Input()\r\n  get yPosition(): MenuPositionY {\r\n    return this._yPosition;\r\n  }\r\n  set yPosition(value: MenuPositionY) {\r\n    this._yPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Whether menu panel overlaps trigger element */\r\n  @Input()\r\n  get overlapTrigger(): boolean {\r\n    return this._overlapTrigger;\r\n  }\r\n  set overlapTrigger(value: boolean) {\r\n    this._overlapTrigger = coerceBooleanProperty(value);\r\n  }\r\n  private _overlapTrigger = false;\r\n\r\n  /** Transfer classes from the sds-menu to the overlay container */\r\n  @Input('class')\r\n  set panelClass(classes: string) {\r\n    const previousPanelClass = this._previousPanelClass;\r\n    // Remove previous classes from current set of classes\r\n    if (previousPanelClass && previousPanelClass.length) {\r\n      previousPanelClass.split(' ').forEach((className: string) => {\r\n        this._classList[className] = false;\r\n      });\r\n    }\r\n\r\n    this._previousPanelClass = classes;\r\n\r\n    // Adds new classes to current set of classes\r\n    if (classes && classes.length) {\r\n      classes.split(' ').forEach((className: string) => {\r\n        this._classList[className] = true;\r\n      });\r\n\r\n      // Remove all classes from <sds-menu>\r\n      this._elementRef.nativeElement.className = '';\r\n    }\r\n  }\r\n\r\n  /** Event emitted when the menu is closed. */\r\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\r\n\r\n  constructor(private _elementRef: ElementRef<HTMLElement>) {}\r\n\r\n  ngOnInit() {\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\r\n      this._items\r\n    ).withWrap();\r\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\r\n      this.closed.emit('tab')\r\n    );\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this._tabSubscription.unsubscribe();\r\n    this.closed.complete();\r\n  }\r\n\r\n  /** Focus the first item in the menu */\r\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\r\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\r\n  }\r\n\r\n  /** Adds classes to the menu panel based on its position */\r\n  setPositionClasses(\r\n    posX: MenuPositionX = this.xPosition,\r\n    posY: MenuPositionY = this.yPosition\r\n  ) {\r\n    const classes = this._classList;\r\n    classes['sds-menu-before'] = posX === 'before';\r\n    classes['sds-menu-after'] = posX === 'after';\r\n    classes['sds-menu-above'] = posY === 'above';\r\n    classes['sds-menu-below'] = posY === 'below';\r\n  }\r\n\r\n  /** Adds a menu item with the menu. */\r\n  addItem(item: SdsMenuItemComponent) {\r\n    if (this._items.indexOf(item) === -1) {\r\n      this._items.push(item);\r\n    }\r\n  }\r\n\r\n  /** Inserts a menu item at an index */\r\n  insertItem(item: SdsMenuItemComponent, index: number) {\r\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\r\n      this._items.splice(index, 0, item);\r\n    }\r\n  }\r\n\r\n  /** Removes an item from the menu. */\r\n  removeItem(item: SdsMenuItemComponent) {\r\n    const index = this._items.indexOf(item);\r\n    if (this._items.indexOf(item) > -1) {\r\n      this._items.splice(index, 1);\r\n    }\r\n  }\r\n\r\n  /** Handle a keyboard event from the menu */\r\n  _handleKeydown(event: KeyboardEvent) {\r\n    // tslint:disable-next-line: deprecation\r\n    const keyCode = event.keyCode;\r\n    const manager = this._keyManager;\r\n\r\n    switch (keyCode) {\r\n      case ESCAPE:\r\n        this.closed.emit('keydown');\r\n        break;\r\n      case HOME:\r\n      case END:\r\n        if (!hasModifierKey(event)) {\r\n          keyCode === HOME\r\n            ? manager.setFirstItemActive()\r\n            : manager.setLastItemActive();\r\n          event.preventDefault();\r\n        }\r\n        break;\r\n      default:\r\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\r\n          manager.setFocusOrigin('keyboard');\r\n        }\r\n\r\n        manager.onKeydown(event);\r\n    }\r\n  }\r\n\r\n  /** Starts the enter animation. */\r\n  _startAnimation() {\r\n    this._panelAnimationState = 'enter';\r\n  }\r\n\r\n  /** Callback that is invoked when the panel animation completes. */\r\n  _onAnimationDone(event: AnimationEvent) {}\r\n\r\n  /** Resets the panel animation to its initial state. */\r\n  _resetAnimation() {\r\n    this._panelAnimationState = 'void';\r\n  }\r\n\r\n  _onAnimationStart(event: AnimationEvent) {\r\n    // Scroll the content element to the top as soon as the animation starts.\r\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\r\n      event.element.scrollTop = 0;\r\n    }\r\n  }\r\n}\r\n",
            "properties": [
                {
                    "name": "addItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 55
                },
                {
                    "name": "closed",
                    "type": "EventEmitter<void | \"click\" | \"keydown\" | \"tab\">",
                    "optional": false,
                    "description": "",
                    "line": 50
                },
                {
                    "name": "focusFirstItem",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 53
                },
                {
                    "name": "insertItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 56
                },
                {
                    "name": "overlapTrigger",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 48
                },
                {
                    "name": "parentMenu",
                    "type": "SdsMenuInterface",
                    "optional": true,
                    "description": "",
                    "line": 51
                },
                {
                    "name": "removeItem",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 57
                },
                {
                    "name": "setPositionClasses",
                    "type": "function",
                    "optional": true,
                    "description": "",
                    "line": 54
                },
                {
                    "name": "size",
                    "type": "MenuSizes",
                    "optional": true,
                    "description": "",
                    "line": 52
                },
                {
                    "name": "templateRef",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 49
                },
                {
                    "name": "xPosition",
                    "type": "MenuPositionX",
                    "optional": false,
                    "description": "",
                    "line": 46
                },
                {
                    "name": "yPosition",
                    "type": "MenuPositionY",
                    "optional": false,
                    "description": "",
                    "line": 47
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "description": "<p>Menu Interface </p>\n",
            "methods": []
        },
        {
            "name": "SdsTruncateTextData",
            "id": "interface-SdsTruncateTextData-5540e28b3ba6948df916a073aff558bd",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts",
            "type": "interface",
            "sourceCode": "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\r\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\r\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\r\n\r\nexport interface SdsTruncateTextData {\r\n  text: string;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-truncated-text-container',\r\n  template: `\r\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\r\n  `,\r\n  animations: [sdsTruncateTextAnimations.container]\r\n})\r\nexport class SdsTruncatedTextContainerComponent {\r\n  @HostBinding('@container') _animationState = 'void';\r\n\r\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\r\n\r\n  /** Starts the animation. */\r\n  startAnimation() {\r\n    this._animationState = 'enter';\r\n  }\r\n\r\n  /** Resets the animation to its initial state. */\r\n  resetAnimation() {\r\n    this._animationState = 'void';\r\n  }\r\n\r\n  /** Intentionally left empty to trigger change detection */\r\n  @HostListener('@container.done')\r\n  _onAnimationDone() {}\r\n}\r\n",
            "properties": [
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 6
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "Selectable",
            "id": "interface-Selectable-da5dce1c3233639ed105400f0995f5e5",
            "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts",
            "type": "interface",
            "sourceCode": "export interface INavigationLink {\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n}\r\n\r\nexport enum NavigationMode {\r\n    INTERNAL, EXTERNAL, EVENT, LABEL\r\n}\r\n\r\nexport interface Selectable {\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected </p>\n",
                    "line": 26
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected </p>\n",
                    "line": 31
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        },
        {
            "name": "VPInterface",
            "id": "interface-VPInterface-1b055b2b41d7a86b1733dca0aa591614",
            "file": "libs/packages/components/src/lib/video-player/video-player.ts",
            "type": "interface",
            "sourceCode": "export interface VPInterface{\r\n  sourceWebm: string;\r\n  sourceMp4: string;\r\n  height: string;\r\n  width: string;\r\n \tcaption: string;\r\n  poster: string;\r\n  id: string;\r\n \tseekInterval: number;\r\n \tdebug: boolean;\r\n  preload: string;\r\n}\r\n",
            "properties": [
                {
                    "name": "caption",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 6
                },
                {
                    "name": "debug",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "height",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "poster",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "preload",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 11
                },
                {
                    "name": "seekInterval",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "sourceMp4",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "sourceWebm",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                },
                {
                    "name": "width",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 5
                }
            ],
            "indexSignatures": [],
            "kind": 150,
            "methods": []
        }
    ],
    "injectables": [
        {
            "name": "SdsDialogService",
            "id": "injectable-SdsDialogService-6fa1b6dd6d643229de079b2f1d54f751",
            "file": "libs/packages/components/src/lib/dialog/dialog.ts",
            "properties": [
                {
                    "name": "_afterAllClosedAtThisLevel",
                    "defaultValue": "new Subject<void>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 64,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_afterOpenedAtThisLevel",
                    "defaultValue": "new Subject<SdsDialogRef<any>>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 65,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_ariaHiddenElements",
                    "defaultValue": "new Map<Element, string|null>()",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 66,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_openDialogsAtThisLevel",
                    "defaultValue": "[]",
                    "type": "SdsDialogRef<any>[]",
                    "optional": false,
                    "description": "",
                    "line": 63,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_scrollStrategy",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 67,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "afterAllClosed",
                    "defaultValue": "defer<void>(() => this.openDialogs.length ?\r\n      this._afterAllClosed :\r\n      this._afterAllClosed.pipe(startWith(undefined)))",
                    "type": "Observable<void>",
                    "optional": false,
                    "description": "<p>Stream that emits when all open dialog have finished closing.\nWill emit on subscribe if there are no open dialogs to begin with.</p>\n",
                    "line": 88,
                    "modifierKind": [
                        132
                    ]
                }
            ],
            "methods": [
                {
                    "name": "_attachDialogContainer",
                    "args": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogContainerComponent",
                    "typeParameters": [],
                    "line": 225,
                    "description": "<p>Attaches an SdsDialogContainerComponent to a dialog&#39;s already-created overlay.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 7807,
                                "end": 7814,
                                "flags": 0,
                                "escapedText": "overlay"
                            },
                            "type": "OverlayRef",
                            "tagName": {
                                "pos": 7801,
                                "end": 7806,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the dialog&#39;s underlying overlay.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 7874,
                                "end": 7880,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 7868,
                                "end": 7873,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 7914,
                                "end": 7921,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to a ComponentRef for the attached container.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_attachDialogContent",
                    "args": [
                        {
                            "name": "componentOrTemplateRef",
                            "type": "ComponentType<T> | TemplateRef<T>"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "overlayRef",
                            "type": "OverlayRef"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef<T, R>",
                    "typeParameters": [
                        "T",
                        "R"
                    ],
                    "line": 246,
                    "description": "<p>Attaches the user-provided component to the already-created SdsDialogContainerComponent.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 8703,
                                "end": 8725,
                                "flags": 0,
                                "escapedText": "componentOrTemplateRef"
                            },
                            "type": "ComponentType<T> | TemplateRef<T>",
                            "tagName": {
                                "pos": 8697,
                                "end": 8702,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The type of component being loaded into the dialog,\nor a TemplateRef to instantiate as the content.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8849,
                                "end": 8864,
                                "flags": 0,
                                "escapedText": "dialogContainer"
                            },
                            "type": "SdsDialogContainerComponent",
                            "tagName": {
                                "pos": 8843,
                                "end": 8848,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the wrapping SdsDialogContainerComponent.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 8933,
                                "end": 8943,
                                "flags": 0,
                                "escapedText": "overlayRef"
                            },
                            "type": "OverlayRef",
                            "tagName": {
                                "pos": 8927,
                                "end": 8932,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the overlay in which the dialog resides.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 9011,
                                "end": 9017,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 9005,
                                "end": 9010,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 9051,
                                "end": 9058,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to the SdsDialogRef that should be returned to the user.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_closeDialogs",
                    "args": [
                        {
                            "name": "dialogs",
                            "type": "SdsDialogRef<any>[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 373,
                    "description": "<p>Closes all of the dialogs in an array. </p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "dialogs",
                            "type": "SdsDialogRef<any>[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_createInjector",
                    "args": [
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        },
                        {
                            "name": "dialogRef",
                            "type": "SdsDialogRef<T>"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "PortalInjector",
                    "typeParameters": [
                        "T"
                    ],
                    "line": 292,
                    "description": "<p>Creates a custom injector to be used inside the dialog. This allows a component loaded inside\nof a dialog to close itself and, optionally, to return a value.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 10735,
                                "end": 10741,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 10729,
                                "end": 10734,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Config object that is used to construct the dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 10807,
                                "end": 10816,
                                "flags": 0,
                                "escapedText": "dialogRef"
                            },
                            "type": "SdsDialogRef<T>",
                            "tagName": {
                                "pos": 10801,
                                "end": 10806,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Reference to the dialog.</p>\n"
                        },
                        {
                            "name": "dialogContainer",
                            "type": "SdsDialogContainerComponent",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "tagName": {
                                "pos": 10929,
                                "end": 10936,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The custom injector that can be used inside the dialog.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_createOverlay",
                    "args": [
                        {
                            "name": "config",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "OverlayRef",
                    "typeParameters": [],
                    "line": 188,
                    "description": "<p>Creates the overlay into which the dialog will be loaded.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6491,
                                "end": 6497,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 6485,
                                "end": 6490,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 6531,
                                "end": 6538,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>A promise resolving to the OverlayRef for the created overlay.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_getOverlayConfig",
                    "args": [
                        {
                            "name": "dialogConfig",
                            "type": "SdsDialogConfig"
                        }
                    ],
                    "optional": false,
                    "returnType": "OverlayConfig",
                    "typeParameters": [],
                    "line": 198,
                    "description": "<p>Creates an overlay config from a dialog config.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6863,
                                "end": 6875,
                                "flags": 0,
                                "escapedText": "dialogConfig"
                            },
                            "type": "SdsDialogConfig",
                            "tagName": {
                                "pos": 6857,
                                "end": 6862,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>The dialog configuration.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 6909,
                                "end": 6916,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The overlay configuration.</p>\n"
                        }
                    ]
                },
                {
                    "name": "_hideNonDialogContentFromAssistiveTechnology",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 350,
                    "description": "<p>Hides all of the content that isn&#39;t an overlay from assistive technology.</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_removeOpenDialog",
                    "args": [
                        {
                            "name": "dialogRef",
                            "type": "SdsDialogRef<any>"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 324,
                    "description": "<p>Removes a dialog from the array of open dialogs.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12240,
                                "end": 12249,
                                "flags": 0,
                                "escapedText": "dialogRef"
                            },
                            "type": "SdsDialogRef<any>",
                            "tagName": {
                                "pos": 12234,
                                "end": 12239,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Dialog to be removed.</p>\n"
                        }
                    ]
                },
                {
                    "name": "closeAll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 163,
                    "description": "<p>Closes all of the currently-open dialogs.</p>\n"
                },
                {
                    "name": "getDialogById",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef | undefined",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>Finds an open dialog by its id.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 5941,
                                "end": 5943,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 5935,
                                "end": 5940,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>ID to use when looking up the dialog.</p>\n"
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 175
                },
                {
                    "name": "open",
                    "args": [
                        {
                            "name": "componentOrTemplateRef",
                            "type": "ComponentType<T> | TemplateRef<T>"
                        },
                        {
                            "name": "config",
                            "type": "SdsDialogConfig<D>",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "SdsDialogRef<T, R>",
                    "typeParameters": [
                        "T",
                        "D",
                        "R"
                    ],
                    "line": 110,
                    "description": "<p>Opens a modal dialog containing the given component.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3794,
                                "end": 3816,
                                "flags": 0,
                                "escapedText": "componentOrTemplateRef"
                            },
                            "type": "ComponentType<T> | TemplateRef<T>",
                            "tagName": {
                                "pos": 3788,
                                "end": 3793,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Type of the component to load into the dialog,\nor a TemplateRef to instantiate as the dialog content.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 3942,
                                "end": 3948,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "type": "SdsDialogConfig<D>",
                            "optional": true,
                            "tagName": {
                                "pos": 3936,
                                "end": 3941,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Extra configuration options.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 3985,
                                "end": 3992,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>Reference to the newly-opened dialog.</p>\n"
                        }
                    ]
                }
            ],
            "description": "<p>Service to open modal dialogs.</p>\n",
            "sourceCode": "import {Directionality} from '@angular/cdk/bidi';\r\nimport {\r\n  Overlay,\r\n  OverlayConfig,\r\n  OverlayContainer,\r\n  OverlayRef,\r\n  ScrollStrategy,\r\n} from '@angular/cdk/overlay';\r\nimport {ComponentPortal, ComponentType, PortalInjector, TemplatePortal} from '@angular/cdk/portal';\r\nimport {Location} from '@angular/common';\r\nimport {\r\n  Inject,\r\n  Injectable,\r\n  InjectionToken,\r\n  Injector,\r\n  OnDestroy,\r\n  Optional,\r\n  SkipSelf,\r\n  TemplateRef,\r\n} from '@angular/core';\r\nimport {defer, Observable, of as observableOf, Subject} from 'rxjs';\r\nimport {startWith} from 'rxjs/operators';\r\nimport {SdsDialogConfig} from './dialog-config';\r\nimport {SdsDialogContainerComponent} from './dialog-container.component';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n\r\n/** Injection token that can be used to access the data that was passed in to a dialog. */\r\nexport const SDS_DIALOG_DATA = new InjectionToken<any>('SdsDialogData');\r\n\r\n/** Injection token that can be used to specify default dialog options. */\r\nexport const SDS_DIALOG_DEFAULT_OPTIONS =\r\n    new InjectionToken<SdsDialogConfig>('sds-dialog-default-options');\r\n\r\n/** Injection token that determines the scroll handling while the dialog is open. */\r\nexport const SDS_DIALOG_SCROLL_STRATEGY =\r\n    new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy');\r\n\r\n/** @docs-private */\r\nexport function SDS_DIALOG_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {\r\n  return () => overlay.scrollStrategies.block();\r\n}\r\n\r\n/** @docs-private */\r\nexport function SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY(overlay: Overlay):\r\n  () => ScrollStrategy {\r\n  return () => overlay.scrollStrategies.block();\r\n}\r\n\r\n/** @docs-private */\r\nexport const SDS_DIALOG_SCROLL_STRATEGY_PROVIDER = {\r\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\r\n  deps: [Overlay],\r\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\r\n};\r\n\r\n\r\n/**\r\n * Service to open modal dialogs.\r\n */\r\n@Injectable()\r\nexport class SdsDialogService implements OnDestroy {\r\n  private _openDialogsAtThisLevel: SdsDialogRef<any>[] = [];\r\n  private readonly _afterAllClosedAtThisLevel = new Subject<void>();\r\n  private readonly _afterOpenedAtThisLevel = new Subject<SdsDialogRef<any>>();\r\n  private _ariaHiddenElements = new Map<Element, string|null>();\r\n  private _scrollStrategy: () => ScrollStrategy;\r\n\r\n  /** Keeps track of the currently-open dialogs. */\r\n  get openDialogs(): SdsDialogRef<any>[] {\r\n    return this._parentDialog ? this._parentDialog.openDialogs : this._openDialogsAtThisLevel;\r\n  }\r\n\r\n  /** Stream that emits when a dialog has been opened. */\r\n  get afterOpened(): Subject<SdsDialogRef<any>> {\r\n    return this._parentDialog ? this._parentDialog.afterOpened : this._afterOpenedAtThisLevel;\r\n  }\r\n\r\n  get _afterAllClosed(): Subject<void> {\r\n    const parent = this._parentDialog;\r\n    return parent ? parent._afterAllClosed : this._afterAllClosedAtThisLevel;\r\n  }\r\n\r\n  /**\r\n   * Stream that emits when all open dialog have finished closing.\r\n   * Will emit on subscribe if there are no open dialogs to begin with.\r\n   */\r\n  readonly afterAllClosed: Observable<void> = defer<void>(() => this.openDialogs.length ?\r\n      this._afterAllClosed :\r\n      this._afterAllClosed.pipe(startWith(undefined)));\r\n\r\n  constructor(\r\n      private _overlay: Overlay,\r\n      private _injector: Injector,\r\n      @Optional() private _location: Location,\r\n      @Optional() @Inject(SDS_DIALOG_DEFAULT_OPTIONS) private _defaultOptions: SdsDialogConfig,\r\n      @Inject(SDS_DIALOG_SCROLL_STRATEGY) scrollStrategy: any,\r\n      @Optional() @SkipSelf() private _parentDialog: SdsDialogService,\r\n      private _overlayContainer: OverlayContainer) {\r\n    this._scrollStrategy = scrollStrategy;\r\n  }\r\n\r\n  /**\r\n   * Opens a modal dialog containing the given component.\r\n   * @param componentOrTemplateRef Type of the component to load into the dialog,\r\n   *     or a TemplateRef to instantiate as the dialog content.\r\n   * @param config Extra configuration options.\r\n   * @returns Reference to the newly-opened dialog.\r\n   */\r\n  open<T, D = any, R = any>(componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\r\n          config?: SdsDialogConfig<D>): SdsDialogRef<T, R> {\r\n\r\n    // Convenience widths names: small | medium | large\r\n    // added to help with standardization\r\n    if (config && config.width) {\r\n      switch (config.width) {\r\n        case 'small': {\r\n          config.width = '370px';\r\n          break;\r\n        }\r\n        case 'medium': {\r\n          config.width = '730px';\r\n          break;\r\n        }\r\n        case 'large': {\r\n          config.width = '960px';\r\n          break;\r\n        }\r\n        default: {\r\n          break;\r\n        }\r\n      }\r\n    }\r\n\r\n    config = _applyConfigDefaults(config, this._defaultOptions || new SdsDialogConfig());\r\n\r\n    if (config.id && this.getDialogById(config.id)) {\r\n      throw Error(`Dialog with id \"${config.id}\" exists already. The dialog id must be unique.`);\r\n    }\r\n\r\n    const overlayRef = this._createOverlay(config);\r\n    const dialogContainer = this._attachDialogContainer(overlayRef, config);\r\n    const dialogRef = this._attachDialogContent<T, R>(componentOrTemplateRef,\r\n                                                      dialogContainer,\r\n                                                      overlayRef,\r\n                                                      config);\r\n\r\n    // If this is the first dialog that we're opening, hide all the non-overlay content.\r\n    if (!this.openDialogs.length) {\r\n      this._hideNonDialogContentFromAssistiveTechnology();\r\n    }\r\n\r\n    this.openDialogs.push(dialogRef);\r\n    dialogRef.afterClosed().subscribe(() => this._removeOpenDialog(dialogRef));\r\n    this.afterOpened.next(dialogRef);\r\n\r\n    return dialogRef;\r\n  }\r\n\r\n  /**\r\n   * Closes all of the currently-open dialogs.\r\n   */\r\n  closeAll(): void {\r\n    this._closeDialogs(this.openDialogs);\r\n  }\r\n\r\n  /**\r\n   * Finds an open dialog by its id.\r\n   * @param id ID to use when looking up the dialog.\r\n   */\r\n  getDialogById(id: string): SdsDialogRef<any> | undefined {\r\n    return this.openDialogs.find(dialog => dialog.id === id);\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    // Only close the dialogs at this level on destroy\r\n    // since the parent service may still be active.\r\n    this._closeDialogs(this._openDialogsAtThisLevel);\r\n    this._afterAllClosedAtThisLevel.complete();\r\n    this._afterOpenedAtThisLevel.complete();\r\n  }\r\n\r\n  /**\r\n   * Creates the overlay into which the dialog will be loaded.\r\n   * @param config The dialog configuration.\r\n   * @returns A promise resolving to the OverlayRef for the created overlay.\r\n   */\r\n  private _createOverlay(config: SdsDialogConfig): OverlayRef {\r\n    const overlayConfig = this._getOverlayConfig(config);\r\n    return this._overlay.create(overlayConfig);\r\n  }\r\n\r\n  /**\r\n   * Creates an overlay config from a dialog config.\r\n   * @param dialogConfig The dialog configuration.\r\n   * @returns The overlay configuration.\r\n   */\r\n  private _getOverlayConfig(dialogConfig: SdsDialogConfig): OverlayConfig {\r\n    const state = new OverlayConfig({\r\n      positionStrategy: this._overlay.position().global(),\r\n      scrollStrategy: dialogConfig.scrollStrategy || this._scrollStrategy(),\r\n      panelClass: dialogConfig.panelClass,\r\n      hasBackdrop: dialogConfig.hasBackdrop,\r\n      direction: dialogConfig.direction,\r\n      minWidth: dialogConfig.minWidth,\r\n      minHeight: dialogConfig.minHeight,\r\n      maxWidth: dialogConfig.maxWidth,\r\n      maxHeight: dialogConfig.maxHeight,\r\n      disposeOnNavigation: dialogConfig.closeOnNavigation\r\n    });\r\n\r\n    if (dialogConfig.backdropClass) {\r\n      state.backdropClass = dialogConfig.backdropClass;\r\n    }\r\n\r\n    return state;\r\n  }\r\n\r\n  /**\r\n   * Attaches an SdsDialogContainerComponent to a dialog's already-created overlay.\r\n   * @param overlay Reference to the dialog's underlying overlay.\r\n   * @param config The dialog configuration.\r\n   * @returns A promise resolving to a ComponentRef for the attached container.\r\n   */\r\n  private _attachDialogContainer(overlay: OverlayRef, config: SdsDialogConfig): SdsDialogContainerComponent {\r\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\r\n    const injector = new PortalInjector(userInjector || this._injector, new WeakMap([\r\n      [SdsDialogConfig, config]\r\n    ]));\r\n    const containerPortal =\r\n        new ComponentPortal(SdsDialogContainerComponent, config.viewContainerRef, injector);\r\n    const containerRef = overlay.attach<SdsDialogContainerComponent>(containerPortal);\r\n\r\n    return containerRef.instance;\r\n  }\r\n\r\n  /**\r\n   * Attaches the user-provided component to the already-created SdsDialogContainerComponent.\r\n   * @param componentOrTemplateRef The type of component being loaded into the dialog,\r\n   *     or a TemplateRef to instantiate as the content.\r\n   * @param dialogContainer Reference to the wrapping SdsDialogContainerComponent.\r\n   * @param overlayRef Reference to the overlay in which the dialog resides.\r\n   * @param config The dialog configuration.\r\n   * @returns A promise resolving to the SdsDialogRef that should be returned to the user.\r\n   */\r\n  private _attachDialogContent<T, R>(\r\n      componentOrTemplateRef: ComponentType<T> | TemplateRef<T>,\r\n      dialogContainer: SdsDialogContainerComponent,\r\n      overlayRef: OverlayRef,\r\n      config: SdsDialogConfig): SdsDialogRef<T, R> {\r\n\r\n    // Create a reference to the dialog we're creating in order to give the user a handle\r\n    // to modify and close it.\r\n    const dialogRef =\r\n        new SdsDialogRef<T, R>(overlayRef, dialogContainer, this._location, config.id);\r\n\r\n    // When the dialog backdrop is clicked, we want to close it.\r\n    if (config.hasBackdrop) {\r\n      overlayRef.backdropClick().subscribe(() => {\r\n        if (!dialogRef.disableClose) {\r\n          dialogRef.close();\r\n        }\r\n      });\r\n    }\r\n\r\n    if (componentOrTemplateRef instanceof TemplateRef) {\r\n      dialogContainer.attachTemplatePortal(\r\n        new TemplatePortal<T>(componentOrTemplateRef, null!,\r\n          <any>{ $implicit: config.data, dialogRef }));\r\n    } else {\r\n      const injector = this._createInjector<T>(config, dialogRef, dialogContainer);\r\n      const contentRef = dialogContainer.attachComponentPortal<T>(\r\n          new ComponentPortal(componentOrTemplateRef, undefined, injector));\r\n      dialogRef.componentInstance = contentRef.instance;\r\n    }\r\n\r\n    dialogRef\r\n      .updateSize(config.width, config.height)\r\n      .updatePosition(config.position);\r\n\r\n    return dialogRef;\r\n  }\r\n\r\n  /**\r\n   * Creates a custom injector to be used inside the dialog. This allows a component loaded inside\r\n   * of a dialog to close itself and, optionally, to return a value.\r\n   * @param config Config object that is used to construct the dialog.\r\n   * @param dialogRef Reference to the dialog.\r\n   * @param container Dialog container element that wraps all of the contents.\r\n   * @returns The custom injector that can be used inside the dialog.\r\n   */\r\n  private _createInjector<T>(\r\n      config: SdsDialogConfig,\r\n      dialogRef: SdsDialogRef<T>,\r\n      dialogContainer: SdsDialogContainerComponent): PortalInjector {\r\n\r\n    const userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;\r\n\r\n    // The SdsDialogContainerComponent is injected in the portal as the SdsDialogContainerComponent and the dialog's\r\n    // content are created out of the same ViewContainerRef and as such, are siblings for injector\r\n    // purposes. To allow the hierarchy that is expected, the SdsDialogContainerComponent is explicitly\r\n    // added to the injection tokens.\r\n    const injectionTokens = new WeakMap<any, any>([\r\n      [SdsDialogContainerComponent, dialogContainer],\r\n      [SDS_DIALOG_DATA, config.data],\r\n      [SdsDialogRef, dialogRef]\r\n    ]);\r\n\r\n    if (config.direction &&\r\n        (!userInjector || !userInjector.get<Directionality | null>(Directionality, null))) {\r\n      injectionTokens.set(Directionality, {\r\n        value: config.direction,\r\n        change: observableOf()\r\n      });\r\n    }\r\n\r\n    return new PortalInjector(userInjector || this._injector, injectionTokens);\r\n  }\r\n\r\n  /**\r\n   * Removes a dialog from the array of open dialogs.\r\n   * @param dialogRef Dialog to be removed.\r\n   */\r\n  private _removeOpenDialog(dialogRef: SdsDialogRef<any>) {\r\n    const index = this.openDialogs.indexOf(dialogRef);\r\n\r\n    if (index > -1) {\r\n      this.openDialogs.splice(index, 1);\r\n\r\n      // If all the dialogs were closed, remove/restore the `aria-hidden`\r\n      // to a the siblings and emit to the `afterAllClosed` stream.\r\n      if (!this.openDialogs.length) {\r\n        this._ariaHiddenElements.forEach((previousValue, element) => {\r\n          if (previousValue) {\r\n            element.setAttribute('aria-hidden', previousValue);\r\n          } else {\r\n            element.removeAttribute('aria-hidden');\r\n          }\r\n        });\r\n\r\n        this._ariaHiddenElements.clear();\r\n        this._afterAllClosed.next();\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Hides all of the content that isn't an overlay from assistive technology.\r\n   */\r\n  private _hideNonDialogContentFromAssistiveTechnology() {\r\n    const overlayContainer = this._overlayContainer.getContainerElement();\r\n\r\n    // Ensure that the overlay container is attached to the DOM.\r\n    if (overlayContainer.parentElement) {\r\n      const siblings = overlayContainer.parentElement.children;\r\n\r\n      for (let i = siblings.length - 1; i > -1; i--) {\r\n        const sibling = siblings[i];\r\n\r\n        if (sibling !== overlayContainer &&\r\n          sibling.nodeName !== 'SCRIPT' &&\r\n          sibling.nodeName !== 'STYLE' &&\r\n          !sibling.hasAttribute('aria-live')) {\r\n\r\n          this._ariaHiddenElements.set(sibling, sibling.getAttribute('aria-hidden'));\r\n          sibling.setAttribute('aria-hidden', 'true');\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /** Closes all of the dialogs in an array. */\r\n  private _closeDialogs(dialogs: SdsDialogRef<any>[]) {\r\n    let i = dialogs.length;\r\n\r\n    while (i--) {\r\n      // The `_openDialogs` property isn't updated after close until the rxjs subscription\r\n      // runs on the next microtask, in addition to modifying the array as we're going\r\n      // through it. We loop through all of them and call close without assuming that\r\n      // they'll be removed from the list instantaneously.\r\n      dialogs[i].close();\r\n    }\r\n  }\r\n\r\n}\r\n\r\n/**\r\n * Applies default options to the dialog config.\r\n * @param config Config to be modified.\r\n * @param defaultOptions Default options provided.\r\n * @returns The new configuration object.\r\n */\r\nfunction _applyConfigDefaults(\r\n    config?: SdsDialogConfig, defaultOptions?: SdsDialogConfig): SdsDialogConfig {\r\n  return {...defaultOptions, ...config};\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_injector",
                        "type": "Injector"
                    },
                    {
                        "name": "_location",
                        "type": "Location"
                    },
                    {
                        "name": "_defaultOptions",
                        "type": "SdsDialogConfig"
                    },
                    {
                        "name": "scrollStrategy",
                        "type": "any"
                    },
                    {
                        "name": "_parentDialog",
                        "type": "SdsDialogService"
                    },
                    {
                        "name": "_overlayContainer",
                        "type": "OverlayContainer"
                    }
                ],
                "line": 90,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_injector",
                        "type": "Injector",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_defaultOptions",
                        "type": "SdsDialogConfig",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "scrollStrategy",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentDialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_overlayContainer",
                        "type": "OverlayContainer",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "openDialogs": {
                    "name": "openDialogs",
                    "getSignature": {
                        "name": "openDialogs",
                        "type": "[]",
                        "returnType": "SdsDialogRef[]",
                        "line": 70,
                        "description": "<p>Keeps track of the currently-open dialogs. </p>\n"
                    }
                },
                "afterOpened": {
                    "name": "afterOpened",
                    "getSignature": {
                        "name": "afterOpened",
                        "type": "",
                        "returnType": "Subject<SdsDialogRef<any>>",
                        "line": 75,
                        "description": "<p>Stream that emits when a dialog has been opened. </p>\n"
                    }
                },
                "_afterAllClosed": {
                    "name": "_afterAllClosed",
                    "getSignature": {
                        "name": "_afterAllClosed",
                        "type": "",
                        "returnType": "Subject<void>",
                        "line": 79
                    }
                }
            },
            "type": "injectable"
        }
    ],
    "classes": [
        {
            "name": "FooterLink",
            "id": "class-FooterLink-b8fd27d6792cc808383c3a01ede94119",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import {\r\n  INavigationLink,\r\n  NavigationMode\r\n} from '../../common-navigation/common-navigation-model';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n}\r\n",
            "properties": [
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 35
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 45
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 40
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "INavigationLink"
            ]
        },
        {
            "name": "FooterLinkSection",
            "id": "class-FooterLinkSection-b8fd27d6792cc808383c3a01ede94119",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import {\r\n  INavigationLink,\r\n  NavigationMode\r\n} from '../../common-navigation/common-navigation-model';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n}\r\n",
            "properties": [
                {
                    "name": "links",
                    "type": "FooterLink[]",
                    "optional": false,
                    "description": "<p>Links in the section</p>\n",
                    "line": 28
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Title text for the section</p>\n",
                    "line": 23
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "FooterModel",
            "id": "class-FooterModel-b8fd27d6792cc808383c3a01ede94119",
            "file": "libs/packages/components/src/lib/footer/model/FooterModel.ts",
            "type": "class",
            "sourceCode": "import {\r\n  INavigationLink,\r\n  NavigationMode\r\n} from '../../common-navigation/common-navigation-model';\r\n\r\nexport class FooterModel {\r\n  /**\r\n   * List of sections and their links\r\n   */\r\n  linkSections: FooterLinkSection[];\r\n\r\n  /**\r\n   * Footer text and logo\r\n   */\r\n\r\n  footerLogo?: FooterLogo;\r\n}\r\n\r\nexport class FooterLinkSection {\r\n  /**\r\n   * Title text for the section\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Links in the section\r\n   */\r\n  links: FooterLink[];\r\n}\r\n\r\nexport class FooterLink implements INavigationLink {\r\n  /**\r\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n   */\r\n  mode: NavigationMode;\r\n\r\n  /**\r\n   * Text to be displayed in the link\r\n   */\r\n  text: string;\r\n\r\n  /**\r\n   * Navigation Route\r\n   */\r\n  route: string;\r\n}\r\n\r\nexport interface FooterLogo {\r\n  /**\r\n   * Text for the Header\r\n   */\r\n\r\n  text: string;\r\n\r\n  /**\r\n   * Image Source Path for the Image button\r\n   */\r\n\r\n  imageSourcePath: string;\r\n\r\n  /**\r\n   * Alt text for image\r\n   */\r\n\r\n  imageAltText: string;\r\n}\r\n",
            "properties": [
                {
                    "name": "footerLogo",
                    "type": "FooterLogo",
                    "optional": true,
                    "description": "<p>Footer text and logo</p>\n",
                    "line": 16
                },
                {
                    "name": "linkSections",
                    "type": "FooterLinkSection[]",
                    "optional": false,
                    "description": "<p>List of sections and their links</p>\n",
                    "line": 10
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "HeaderHome",
            "id": "class-HeaderHome-8d4a050da69c1131be192d3f5c973365",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 48
                },
                {
                    "name": "logo",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Agency Logo for the Header</p>\n",
                    "line": 38
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 28
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route for Home image button</p>\n",
                    "line": 43
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 53
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 33
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "HeaderNavigationLink",
            "id": "class-HeaderNavigationLink-8d4a050da69c1131be192d3f5c973365",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "children",
                    "type": "HeaderNavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 79
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 84
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 64
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 74
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 89
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 69
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "HeaderSecondaryLink",
            "id": "class-HeaderSecondaryLink-8d4a050da69c1131be192d3f5c973365",
            "file": "libs/packages/components/src/lib/header/model/HeaderModel.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\n\r\nexport interface HeaderModel {\r\n\r\n    /**\r\n     * Header logo and header logo home link\r\n     */\r\n    home: HeaderHome;\r\n\r\n    /**\r\n     * List of secondary links\r\n     */\r\n    secondaryLinks: HeaderSecondaryLink[];\r\n\r\n    /**\r\n     * List of main navigaation links/drop downs\r\n     */\r\n    navigationLinks: HeaderNavigationLink[];\r\n}\r\n\r\n\r\nexport class HeaderHome implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n    */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text for the Header\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Agency Logo for the Header\r\n     */\r\n    logo: string;\r\n\r\n    /**\r\n     * Navigation Route for Home image button\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n    * Identifier for the item when search for selected\r\n    */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n/**\r\n *\r\n */\r\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: HeaderNavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n\r\n\r\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route\r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * image class eg. fas\r\n     */\r\n    imageClassPrefix: string;\r\n\r\n    /**\r\n     * image class\r\n     */\r\n    imageClass: string;\r\n\r\n    /**\r\n     * displays counter with image\r\n     */\r\n    hasCounter?: boolean;\r\n\r\n    /**\r\n     * Identifier for the item when search for selected\r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected\r\n     */\r\n    selected?: boolean;\r\n}\r\n",
            "properties": [
                {
                    "name": "hasCounter",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>displays counter with image</p>\n",
                    "line": 123
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 128
                },
                {
                    "name": "imageClass",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class</p>\n",
                    "line": 118
                },
                {
                    "name": "imageClassPrefix",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class eg. fas</p>\n",
                    "line": 113
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 98
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 108
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 133
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 103
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "KeyHelper",
            "id": "class-KeyHelper-2ae46406b1f2ce8e3c40d3242cea6abd",
            "file": "libs/packages/components/src/lib/key-helper/key-helper.ts",
            "type": "class",
            "sourceCode": "export class KeyHelper {\r\n\r\n  private _allowedKeys: string[] = [];\r\n\r\n  private _currentlySupported = [\r\n    'enter','up','down','left','right','tab','esc','space',\r\n    'shift','backspace','1','2','3','4','5','6','7','8',\r\n    '9','0', 'delete'\r\n  ];\r\n\r\n  constructor (...keys) {\r\n    this._setAllowedKeys(...keys);\r\n  }\r\n\r\n  public isAllowed (event): boolean {\r\n    const val = this._allowedKeys\r\n      .reduce(\r\n        (val, key) => {\r\n          return KeyHelper.is(key, event) || val;\r\n        },\r\n        false\r\n      );\r\n    return val;\r\n  }\r\n\r\n  private _setAllowedKeys(...keys) {\r\n    keys.forEach(\r\n      key => {\r\n        if (this._currentlySupported.indexOf(key) !== -1) {\r\n          this._allowedKeys.push(key);\r\n        } else {\r\n          const ok = this._allowedToString();\r\n          const msg = `Only supports ${ok} at this time`;\r\n          throw new TypeError(msg);\r\n        }\r\n      }\r\n    );\r\n  }\r\n\r\n  private _allowedToString (): string {\r\n    return this._allowedKeys.join(', ');\r\n  }\r\n\r\n  public static getKeyCode (event: any): string {\r\n\r\n    if (!event) {\r\n      return undefined;\r\n    } else if (event.key) {\r\n      return event.key;\r\n    } else if (event.code) {\r\n      return event.code;\r\n    } else if (event.keyIdentifier) {\r\n      return event.keyIdentifier;\r\n    } else {\r\n      return undefined;\r\n    }\r\n\r\n  }\r\n\r\n  public static getNumberFromKey (event): number {\r\n    const tests = [\r\n      KeyHelper._zero, KeyHelper._one, KeyHelper._two,\r\n      KeyHelper._three, KeyHelper._four, KeyHelper._five,\r\n      KeyHelper._six, KeyHelper._seven, KeyHelper._eight,\r\n      KeyHelper._nine\r\n    ];\r\n\r\n    return tests.reduce(\r\n      (val: number | undefined, test: Function) => {\r\n        return val !== undefined\r\n          ? val\r\n          : test(event);\r\n      }, undefined\r\n    );\r\n  }\r\n\r\n  public static is (\r\n    validKeyParam: string,\r\n    event: KeyboardEvent | any): boolean {\r\n    let lowercased = validKeyParam.toLowerCase();\r\n    switch (lowercased) {\r\n      case 'enter':\r\n        return this._isEnter(event);\r\n      case 'up':\r\n        return this._isArrowUp(event);\r\n      case 'down':\r\n        return this._isArrowDown(event);\r\n      case 'left':\r\n        return this._isArrowLeft(event);\r\n      case 'right':\r\n        return this._isArrowRight(event);\r\n      case 'tab':\r\n        return this._isTab(event);\r\n      case 'esc':\r\n        return this._isEscape(event);\r\n      case 'space':\r\n        return this._isSpace(event);\r\n      case 'shift':\r\n        return this._isShift(event);\r\n      case 'backspace':\r\n        return this._isBackspace(event);\r\n      case 'delete':\r\n        return this._isDelete(event);\r\n      case '0':\r\n        return this._isExpectedNumber(0, event);\r\n      case '1':\r\n        return this._isExpectedNumber(1, event);\r\n      case '2':\r\n        return this._isExpectedNumber(2, event);\r\n      case '3':\r\n        return this._isExpectedNumber(3, event);\r\n      case '4':\r\n        return this._isExpectedNumber(4, event);\r\n      case '5':\r\n        return this._isExpectedNumber(5, event);\r\n      case '6':\r\n        return this._isExpectedNumber(6, event);\r\n      case '7':\r\n        return this._isExpectedNumber(7, event);\r\n      case '8':\r\n        return this._isExpectedNumber(8, event);\r\n      case '9':\r\n        return this._isExpectedNumber(9, event);\r\n      default:\r\n        return false;\r\n    }\r\n  }\r\n\r\n  private static _isEnter (e: KeyboardEvent | any) {\r\n    if (e.code === 'Enter'\r\n      || e.key === 'Enter'\r\n      || e.keyIdentifier === 'Enter'\r\n      || e.which === 13\r\n      || e.charCode === 13\r\n      || e.keyCode === 13) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowUp (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowUp'\r\n      || e.key === 'ArrowUp'\r\n      || e.key === 'Up'\r\n      || e.keyIdentifier === 'Up'\r\n      || e.which === 38\r\n      || e.keyCode === 38) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowDown (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowDown'\r\n      || e.key === 'ArrowDown'\r\n      || e.key === 'Down'\r\n      || e.keyIdentifier === 'Down'\r\n      || e.which === 40\r\n      || e.keyCode === 40) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowLeft (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowLeft'\r\n      || e.key === 'ArrowLeft'\r\n      || e.key === 'Left'\r\n      || e.keyIdentifier === 'Left'\r\n      || e.which === 37\r\n      || e.keyCode === 37) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isArrowRight (e: KeyboardEvent | any) {\r\n    if (e.code === 'ArrowRight'\r\n      || e.key === 'ArrowRight'\r\n      || e.key === 'Right'\r\n      || e.keyIdentifier === 'Right'\r\n      || e.which === 39\r\n      || e.keyCode === 39) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isTab (e: KeyboardEvent | any) {\r\n    if (e.code === 'Tab'\r\n      || e.key === 'Tab'\r\n      || e.keyIdentifier === 'U+0009'\r\n      || e.which === 9\r\n      || e.keyCode === 9) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isEscape (e: KeyboardEvent | any) {\r\n    if (e.code === 'Escape'\r\n      || e.key === 'Escape'\r\n      || e.key === 'Esc'\r\n      || e.keyIdentifier === 'U+001B'\r\n      || e.which === 27\r\n      || e.keyCode === 27) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isSpace (e: KeyboardEvent | any) {\r\n    if (e.code === 'Space'\r\n      || e.key === ' '\r\n      || e.key === 'Spacebar'\r\n      || e.keyIdentifier === 'U+0020'\r\n      || e.which === 32\r\n      || e.keyCode === 32) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isShift (e: KeyboardEvent | any) {\r\n    if (e.code === 'ShiftLeft'\r\n      || e.code === 'ShiftRight'\r\n      || e.key === 'Shift'\r\n      || e.keyIdentifier === 'Shift'\r\n      || e.which === 16\r\n      || e.keyCode === 16) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isBackspace (e: KeyboardEvent | any) {\r\n    if (e.code === 'Backspace'\r\n      || e.key === 'Backspace'\r\n      || e.keyIdentifier === 'U+0008'\r\n      || e.which === 8\r\n      || e.keyCode === 8) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _isDelete (e: KeyboardEvent | any) {\r\n    if (e.code === 'Delete'\r\n      || e.key === 'Delete'\r\n      || e.keyIdentifier === 'U+007F'\r\n      || e.which === 46\r\n      || e.keyCode === 46) {\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  }\r\n\r\n  private static _zero (e): number {\r\n    if (e.code === 'Digit0'\r\n      || e.code === 'Numpad0'\r\n      || e.key === 0\r\n      || e.keyCode === 48\r\n      || e.keyCode === 96\r\n      || e.keyIdentifier === 'U+0030'\r\n      || e.which === 48) {\r\n      return 0;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _one (e): number {\r\n    if (e.code === 'Digit1'\r\n      || e.code === 'Numpad1'\r\n      || e.key === 1\r\n      || e.keyCode === 49\r\n      || e.keyCode === 97\r\n      || e.keyIdentifier === 'U+0031'\r\n      || e.which === 49) {\r\n      return 1;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _two (e): number {\r\n    if (e.code === 'Digit2'\r\n      || e.code === 'Numpad2'\r\n      || e.key === 2\r\n      || e.keyCode === 50\r\n      || e.keyCode === 98\r\n      || e.keyIdentifier === 'U+0032'\r\n      || e.which === 50) {\r\n      return 2;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _three (e): number {\r\n    if (e.code === 'Digit3'\r\n      || e.code === 'Numpad3'\r\n      || e.key === 3\r\n      || e.keyCode === 51\r\n      || e.keyCode === 99\r\n      || e.keyIdentifier === 'U+0033'\r\n      || e.which === 51) {\r\n      return 3;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _four (e): number {\r\n    if (e.code === 'Digit4'\r\n      || e.code === 'Numpad4'\r\n      || e.key === 4\r\n      || e.keyCode === 52\r\n      || e.keyCode === 100\r\n      || e.keyIdentifier === 'U+0034'\r\n      || e.which === 52) {\r\n      return 4;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n  private static _five (e): number {\r\n    if (e.code === 'Digit5'\r\n      || e.code === 'Numpad5'\r\n      || e.key === 5\r\n      || e.keyCode === 53\r\n      || e.keyCode === 101\r\n      || e.keyIdentifier === 'U+0035'\r\n      || e.which === 53) {\r\n      return 5;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _six (e): number {\r\n    if (e.code === 'Digit6'\r\n      || e.code === 'Numpad6'\r\n      || e.key === 6\r\n      || e.keyCode === 54\r\n      || e.keyCode === 102\r\n      || e.keyIdentifier === 'U+0036'\r\n      || e.which === 54) {\r\n      return 6;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _seven (e): number {\r\n    if (e.code === 'Digit7'\r\n      || e.code === 'Numpad7'\r\n      || e.key === 7\r\n      || e.keyCode === 55\r\n      || e.keyCode === 103\r\n      || e.keyIdentifier === 'U+0037'\r\n      || e.which === 55) {\r\n      return 7;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _eight (e): number {\r\n    if (e.code === 'Digit8'\r\n      || e.code === 'Numpad8'\r\n      || e.key === 8\r\n      || e.keyCode === 56\r\n      || e.keyCode === 104\r\n      || e.keyIdentifier === 'U+0038'\r\n      || e.which === 56) {\r\n      return 8;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _nine (e): number {\r\n    if (e.code === 'Digit9'\r\n      || e.code === 'Numpad9'\r\n      || e.key === 9\r\n      || e.keyCode === 57\r\n      || e.keyCode === 105\r\n      || e.keyIdentifier === 'U+0039'\r\n      || e.which === 57) {\r\n      return 9;\r\n    } else {\r\n      return undefined;\r\n    }\r\n  }\r\n\r\n  private static _isExpectedNumber (expected, event)\r\n    : boolean {\r\n    return expected === KeyHelper.getNumberFromKey(event);\r\n  }\r\n\r\n}\r\n\r\nexport enum KEYS {\r\n  'ENTER' = 'enter',\r\n  'UP' = 'up',\r\n  'DOWN' = 'down',\r\n  'LEFT' = 'left',\r\n  'RIGHT' = 'right',\r\n  'TAB' = 'tab',\r\n  'ESC' = 'esc',\r\n  'SPACE' = 'space',\r\n  'SHIFT' = 'shift',\r\n  'BACKSPACE' = 'backspace',\r\n  'ONE' = '1',\r\n  'TWO' = '2',\r\n  'THREE' = '3',\r\n  'FOUR' = '4',\r\n  'FIVE' = '5',\r\n  'SIX' = '6',\r\n  'SEVEN' = '7',\r\n  'EIGHT' = '8',\r\n  'NINE' = '9',\r\n  'ZERO' = '0',\r\n  'DELETE' = 'delete'\r\n}\r\n\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "keys",
                        "type": "any[]",
                        "dotDotDotToken": true
                    }
                ],
                "line": 9,
                "jsdoctags": [
                    {
                        "name": "keys",
                        "type": "any[]",
                        "dotDotDotToken": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "_allowedKeys",
                    "defaultValue": "[]",
                    "type": "string[]",
                    "optional": false,
                    "description": "",
                    "line": 3,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_currentlySupported",
                    "defaultValue": "[\r\n    'enter','up','down','left','right','tab','esc','space',\r\n    'shift','backspace','1','2','3','4','5','6','7','8',\r\n    '9','0', 'delete'\r\n  ]",
                    "type": "[]",
                    "optional": false,
                    "description": "",
                    "line": 5,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methods": [
                {
                    "name": "_allowedToString",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 40,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_eight",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 380,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_five",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 338,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_four",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 325,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowDown",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 155,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowLeft",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 168,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowRight",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 181,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isArrowUp",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 142,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isBackspace",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 245,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isDelete",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 257,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isEnter",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 129,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isEscape",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 206,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isExpectedNumber",
                    "args": [
                        {
                            "name": "expected",
                            "type": ""
                        },
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 408,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "expected",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isShift",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 232,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isSpace",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 219,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_isTab",
                    "args": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 194,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_nine",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 394,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_one",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 283,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_setAllowedKeys",
                    "args": [
                        {
                            "name": "keys",
                            "type": "any[]",
                            "dotDotDotToken": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 26,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "keys",
                            "type": "any[]",
                            "dotDotDotToken": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_seven",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 366,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_six",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 352,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_three",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 311,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_two",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 297,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_zero",
                    "args": [
                        {
                            "name": "e",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 269,
                    "modifierKind": [
                        112,
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "e",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getKeyCode",
                    "args": [
                        {
                            "name": "event",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 44,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getNumberFromKey",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 60,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "is",
                    "args": [
                        {
                            "name": "validKeyParam",
                            "type": "string"
                        },
                        {
                            "name": "event",
                            "type": "KeyboardEvent | any"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 77,
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": "validKeyParam",
                            "type": "string",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "KeyboardEvent | any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "isAllowed",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 15,
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "NavigationHelper",
            "id": "class-NavigationHelper-469c5886b95fa311ff9daab299c0818e",
            "file": "libs/packages/components/src/lib/common-navigation/navigation-helper.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from './common-navigation-model';\r\nexport class NavigationHelper {\r\n\r\n    /**\r\n     * checks if link is internal\r\n     * @param link \r\n     */\r\n    isLinkInternal(link: INavigationLink) {\r\n        return link.mode === NavigationMode.INTERNAL;\r\n    }\r\n\r\n    /**\r\n     * checks if link is external\r\n     * @param link \r\n     */\r\n    isLinkExternal(link: INavigationLink) {\r\n        return link.mode === NavigationMode.EXTERNAL;\r\n    }\r\n}",
            "properties": [],
            "methods": [
                {
                    "name": "isLinkExternal",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 16,
                    "description": "<p>checks if link is external</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 354,
                                "end": 358,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 348,
                                "end": 353,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "isLinkInternal",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 8,
                    "description": "<p>checks if link is internal</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 171,
                                "end": 175,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 165,
                                "end": 170,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "NavigationLink",
            "id": "class-NavigationLink-d25c2dec7563980ed43433307b1100a4",
            "file": "libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\nexport class SideNavigationModel {\r\n\r\n    /**\r\n     * \r\n     */\r\n    navigationLinks: NavigationLink[];\r\n}\r\n\r\n\r\nexport class NavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: NavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n\r\n\r\n    /**\r\n     * Query string paramaters supporeted with external and internal links\r\n     * ex. { 'name': 'value',...}\r\n     */\r\n    queryParams?: {\r\n        [k: string]: any;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n",
            "properties": [
                {
                    "name": "children",
                    "type": "NavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 32
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected </p>\n",
                    "line": 37
                },
                {
                    "name": "mode",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 17
                },
                {
                    "name": "queryParams",
                    "type": "literal type",
                    "optional": true,
                    "description": "<p>Query string paramaters supporeted with external and internal links\nex. { &#39;name&#39;: &#39;value&#39;,...}</p>\n",
                    "line": 49
                },
                {
                    "name": "route",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route </p>\n",
                    "line": 27
                },
                {
                    "name": "selected",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected </p>\n",
                    "line": 42
                },
                {
                    "name": "text",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 22
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "Selectable",
                "INavigationLink"
            ]
        },
        {
            "name": "PaginationConfigurationModel",
            "id": "class-PaginationConfigurationModel-98ba5c16d9b8eac8309de52a021f4a16",
            "file": "libs/packages/components/src/lib/pagination/model/paginationModel.ts",
            "type": "class",
            "sourceCode": "export class PaginationConfigurationModel {\r\n\r\n    /**\r\n     * used to distinguish fields\r\n     */\r\n    id: string;\r\n}\r\n\r\nexport class PaginationModel {\r\n\r\n    /**\r\n     * current page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * size of page ex 25, 50,100\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * total number of pages\r\n     */\r\n    totalPages: number;\r\n}\r\n",
            "properties": [
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>used to distinguish fields</p>\n",
                    "line": 7
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "PaginationModel",
            "id": "class-PaginationModel-98ba5c16d9b8eac8309de52a021f4a16",
            "file": "libs/packages/components/src/lib/pagination/model/paginationModel.ts",
            "type": "class",
            "sourceCode": "export class PaginationConfigurationModel {\r\n\r\n    /**\r\n     * used to distinguish fields\r\n     */\r\n    id: string;\r\n}\r\n\r\nexport class PaginationModel {\r\n\r\n    /**\r\n     * current page number\r\n     */\r\n    pageNumber: number;\r\n\r\n    /**\r\n     * size of page ex 25, 50,100\r\n     */\r\n    pageSize: number;\r\n\r\n    /**\r\n     * total number of pages\r\n     */\r\n    totalPages: number;\r\n}\r\n",
            "properties": [
                {
                    "name": "pageNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>current page number</p>\n",
                    "line": 15
                },
                {
                    "name": "pageSize",
                    "type": "number",
                    "optional": false,
                    "description": "<p>size of page ex 25, 50,100</p>\n",
                    "line": 20
                },
                {
                    "name": "totalPages",
                    "type": "number",
                    "optional": false,
                    "description": "<p>total number of pages</p>\n",
                    "line": 25
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSAutocompletelConfiguration",
            "id": "class-SDSAutocompletelConfiguration-01d52d3bfb6dce1dda73e4e9f282aa1e",
            "file": "libs/packages/components/src/lib/autocomplete/models/SDSAutocompletelConfiguration.model.ts",
            "type": "class",
            "sourceCode": "import { SDSSelectedResultConfiguration } from '../../selected-result/models/SDSSelectedResultConfiguration';\r\nimport { SDSAutocompleteSearchConfiguration } from '../../autocomplete-search/models/SDSAutocompleteConfiguration';\r\nimport { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\r\n\r\nexport class SDSAutocompletelConfiguration implements SDSSelectedResultConfiguration, SDSAutocompleteSearchConfiguration {\r\n  /**\r\n     * sets the default debounce time to 250 milliseconds \r\n     */\r\n  constructor() {\r\n    this.debounceTime = 250;\r\n    this.minimumCharacterCountSearch = 0;\r\n  }\r\n\r\n  /**\r\n   * Used to describe the drop down (Text should match the label that will be supplied)\r\n   */\r\n  public labelText: string;\r\n\r\n  /**\r\n   * Used for the Id of the control\r\n   */\r\n  public id: string;\r\n\r\n  /**\r\n   *  This is the primary field used to identify each object in the results\r\n   */\r\n  public primaryKeyField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the top part of the basic template\r\n   */\r\n  public primaryTextField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the bottom part of the basic template\r\n   */\r\n  public secondaryTextField: string;\r\n\r\n  /**\r\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\r\n   */\r\n  public debounceTime: number;\r\n\r\n  /**\r\n   * Place holder text for autocomplete input\r\n   */\r\n  public autocompletePlaceHolderText: string;\r\n\r\n  /**\r\n   * Mininumn Characters for search\r\n   */\r\n  public minimumCharacterCountSearch: number;\r\n\r\n  /**\r\n   * Mode of the model either allows a single item or multiple items\r\n   */\r\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\r\n\r\n\r\n  /**\r\n   * Allows option to allow user text not in the standard results\r\n   */\r\n  public isFreeTextEnabled: boolean = false;\r\n\r\n  /**\r\n   * Text appeneded ad the end of free text\r\n   */\r\n  public freeTextSubtext: string = 'search';\r\n\r\n  /**\r\n   * Focus into autocomplete search\r\n   */\r\n  public focusInSearch: boolean = true;\r\n\r\n  /**\r\n   * The aria-label for the auto-complete\r\n   */\r\n  public ariaLabelText: string = 'Auto Complete';\r\n}",
            "constructorObj": {
                "name": "constructor",
                "description": "<p>sets the default debounce time to 250 milliseconds </p>\n",
                "args": [],
                "line": 5
            },
            "properties": [
                {
                    "name": "ariaLabelText",
                    "defaultValue": "'Auto Complete'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>The aria-label for the auto-complete</p>\n",
                    "line": 78,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "autocompletePlaceHolderText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Place holder text for autocomplete input</p>\n",
                    "line": 47,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "debounceTime",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n",
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "focusInSearch",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Focus into autocomplete search</p>\n",
                    "line": 73,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "freeTextSubtext",
                    "defaultValue": "'search'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text appeneded ad the end of free text</p>\n",
                    "line": 68,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used for the Id of the control</p>\n",
                    "line": 22,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isFreeTextEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Allows option to allow user text not in the standard results</p>\n",
                    "line": 63,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 17,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "minimumCharacterCountSearch",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Mininumn Characters for search</p>\n",
                    "line": 52,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 27,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template</p>\n",
                    "line": 32,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 37,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 57,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "implements": [
                "SDSSelectedResultConfiguration",
                "SDSAutocompleteSearchConfiguration"
            ]
        },
        {
            "name": "SDSAutocompleteSearchConfiguration",
            "id": "class-SDSAutocompleteSearchConfiguration-6afab849213afecbcd8edc8869d58245",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteConfiguration.ts",
            "type": "class",
            "sourceCode": "import { SelectionMode } from '../../selected-result/models/sds-selected-item-model-helper';\r\n\r\nexport class SDSAutocompleteSearchConfiguration {\r\n\r\n  /**\r\n   * sets the default debounce time to 250 milliseconds \r\n   */\r\n  constructor() {\r\n    this.debounceTime = 250;\r\n    this.minimumCharacterCountSearch = 0;\r\n  }\r\n\r\n  /**\r\n   * Used to describe the drop down (Text should match the label that will be supplied)\r\n   */\r\n  public labelText: string;\r\n\r\n  /**\r\n   * Used for the Id of the control\r\n   */\r\n  public id: string;\r\n\r\n  /**\r\n   *  This is the primary field used to identify each object in the results\r\n   */\r\n  public primaryKeyField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the top part of the basic template \r\n   *  and the text for single selection\r\n   */\r\n  public primaryTextField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the bottom part of the basic template\r\n   */\r\n  public secondaryTextField: string;\r\n\r\n  /**\r\n   *  Sets the time waited for addional key actions Default is 250 milliseconds\r\n   */\r\n  public debounceTime: number;\r\n\r\n  /**\r\n   * Place holder text for autocomplete input\r\n   */\r\n  public autocompletePlaceHolderText: string;\r\n\r\n  /**\r\n   * Mininumn Characters for search\r\n   */\r\n  public minimumCharacterCountSearch: number;\r\n\r\n  /**\r\n   * Mode of the model either allows a single item or multiple items\r\n   */\r\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\r\n\r\n  /**\r\n   * Allows option to allow user text not in the standard results\r\n   */\r\n  public isFreeTextEnabled: boolean = false;\r\n\r\n  /**\r\n   * Text appeneded ad the end of free text\r\n   */\r\n  public freeTextSubtext: string = 'search';\r\n\r\n  /**\r\n   * Focus into autocomplete search\r\n   */\r\n  public focusInSearch: boolean = true;\r\n\r\n  /**\r\n   * The aria-label for the auto-complete\r\n   */\r\n  public ariaLabelText: string = 'Auto Complete';\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "<p>sets the default debounce time to 250 milliseconds </p>\n",
                "args": [],
                "line": 3
            },
            "properties": [
                {
                    "name": "ariaLabelText",
                    "defaultValue": "'Auto Complete'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>The aria-label for the auto-complete</p>\n",
                    "line": 77,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "autocompletePlaceHolderText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Place holder text for autocomplete input</p>\n",
                    "line": 47,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "debounceTime",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Sets the time waited for addional key actions Default is 250 milliseconds</p>\n",
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "focusInSearch",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Focus into autocomplete search</p>\n",
                    "line": 72,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "freeTextSubtext",
                    "defaultValue": "'search'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text appeneded ad the end of free text</p>\n",
                    "line": 67,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used for the Id of the control</p>\n",
                    "line": 21,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "isFreeTextEnabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Allows option to allow user text not in the standard results</p>\n",
                    "line": 62,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 16,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "minimumCharacterCountSearch",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Mininumn Characters for search</p>\n",
                    "line": 52,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 26,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template \nand the text for single selection</p>\n",
                    "line": 32,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 37,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 57,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SdsDialogConfig",
            "id": "class-SdsDialogConfig-907bb375e34a5ecc5ba8d9ea1022c9aa",
            "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
            "type": "class",
            "sourceCode": "import {ViewContainerRef} from '@angular/core';\r\nimport {Direction} from '@angular/cdk/bidi';\r\nimport {ScrollStrategy} from '@angular/cdk/overlay';\r\n\r\n/** Valid ARIA roles for a dialog element. */\r\nexport type DialogRole = 'dialog' | 'alertdialog';\r\n\r\n/** Possible overrides for a dialog's position. */\r\nexport interface DialogPosition {\r\n  /** Override for the dialog's top position. */\r\n  top?: string;\r\n\r\n  /** Override for the dialog's bottom position. */\r\n  bottom?: string;\r\n\r\n  /** Override for the dialog's left position. */\r\n  left?: string;\r\n\r\n  /** Override for the dialog's right position. */\r\n  right?: string;\r\n}\r\n\r\n/**\r\n * Configuration for opening a modal dialog with the SdsDialog service.\r\n */\r\nexport class SdsDialogConfig<D = any> {\r\n\r\n  /**\r\n   * Where the attached component should live in Angular's *logical* component tree.\r\n   * This affects what is available for injection and the change detection order for the\r\n   * component instantiated inside of the dialog. This does not affect where the dialog\r\n   * content will be rendered.\r\n   */\r\n  viewContainerRef?: ViewContainerRef;\r\n\r\n  /** ID for the dialog. If omitted, a unique one will be generated. */\r\n  id?: string;\r\n\r\n  /** The ARIA role of the dialog element. */\r\n  role?: DialogRole = 'dialog';\r\n\r\n  /** Custom class for the overlay pane. */\r\n  panelClass?: string | string[] = '';\r\n\r\n  /** Whether the dialog has a backdrop. */\r\n  hasBackdrop? = true;\r\n\r\n  /** Custom class for the backdrop, */\r\n  backdropClass? = '';\r\n\r\n  /** Whether the user can use escape or clicking on the backdrop to close the modal. */\r\n  disableClose? = false;\r\n\r\n  /** Width of the dialog. */\r\n  width? = '';\r\n\r\n  /** Height of the dialog. */\r\n  height? = '';\r\n\r\n  /** Min-width of the dialog. If a number is provided, pixel units are assumed. */\r\n  minWidth?: number | string;\r\n\r\n  /** Min-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  minHeight?: number | string;\r\n\r\n  /** Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw */\r\n  maxWidth?: number | string = '80vw';\r\n\r\n  /** Max-height of the dialog. If a number is provided, pixel units are assumed. */\r\n  maxHeight?: number | string;\r\n\r\n  /** Position overrides. */\r\n  position?: DialogPosition;\r\n\r\n  /** Data being injected into the child component. */\r\n  data?: D | null = null;\r\n\r\n  /** Layout direction for the dialog's content. */\r\n  direction?: Direction;\r\n\r\n  /** ID of the element that describes the dialog. */\r\n  ariaDescribedBy?: string | null = null;\r\n\r\n  /** Aria label to assign to the dialog element */\r\n  ariaLabel?: string | null = null;\r\n\r\n  /** Whether the dialog should focus the first focusable element on open. */\r\n  autoFocus? = true;\r\n\r\n  /**\r\n   * Whether the dialog should restore focus to the\r\n   * previously-focused element, after it's closed.\r\n   */\r\n  restoreFocus? = true;\r\n\r\n  /** Scroll strategy to be used for the dialog. */\r\n  scrollStrategy?: ScrollStrategy;\r\n\r\n  /**\r\n   * Whether the dialog should close when the user goes backwards/forwards in history.\r\n   * Note that this usually doesn't include clicking on links (unless the user is using\r\n   * the `HashLocationStrategy`).\r\n   */\r\n  closeOnNavigation? = true;\r\n\r\n  /**\r\n   * Wheter the dialog its an alert\r\n   */\r\n  alert?: 'warning' | 'info' | 'error';\r\n}\r\n",
            "properties": [
                {
                    "name": "alert",
                    "type": "\"warning\" | \"info\" | \"error\"",
                    "optional": true,
                    "description": "<p>Wheter the dialog its an alert</p>\n",
                    "line": 109
                },
                {
                    "name": "ariaDescribedBy",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": true,
                    "description": "<p>ID of the element that describes the dialog. </p>\n",
                    "line": 82
                },
                {
                    "name": "ariaLabel",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": true,
                    "description": "<p>Aria label to assign to the dialog element </p>\n",
                    "line": 85
                },
                {
                    "name": "autoFocus",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should focus the first focusable element on open. </p>\n",
                    "line": 88
                },
                {
                    "name": "backdropClass",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Custom class for the backdrop, </p>\n",
                    "line": 49
                },
                {
                    "name": "closeOnNavigation",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should close when the user goes backwards/forwards in history.\nNote that this usually doesn&#39;t include clicking on links (unless the user is using\nthe <code>HashLocationStrategy</code>).</p>\n",
                    "line": 104
                },
                {
                    "name": "data",
                    "defaultValue": "null",
                    "type": "D | null",
                    "optional": true,
                    "description": "<p>Data being injected into the child component. </p>\n",
                    "line": 76
                },
                {
                    "name": "direction",
                    "type": "Direction",
                    "optional": true,
                    "description": "<p>Layout direction for the dialog&#39;s content. </p>\n",
                    "line": 79
                },
                {
                    "name": "disableClose",
                    "defaultValue": "false",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the user can use escape or clicking on the backdrop to close the modal. </p>\n",
                    "line": 52
                },
                {
                    "name": "hasBackdrop",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog has a backdrop. </p>\n",
                    "line": 46
                },
                {
                    "name": "height",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Height of the dialog. </p>\n",
                    "line": 58
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": true,
                    "description": "<p>ID for the dialog. If omitted, a unique one will be generated. </p>\n",
                    "line": 37
                },
                {
                    "name": "maxHeight",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Max-height of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 70
                },
                {
                    "name": "maxWidth",
                    "defaultValue": "'80vw'",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Max-width of the dialog. If a number is provided, pixel units are assumed. Defaults to 80vw </p>\n",
                    "line": 67
                },
                {
                    "name": "minHeight",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Min-height of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 64
                },
                {
                    "name": "minWidth",
                    "type": "number | string",
                    "optional": true,
                    "description": "<p>Min-width of the dialog. If a number is provided, pixel units are assumed. </p>\n",
                    "line": 61
                },
                {
                    "name": "panelClass",
                    "defaultValue": "''",
                    "type": "string | string[]",
                    "optional": true,
                    "description": "<p>Custom class for the overlay pane. </p>\n",
                    "line": 43
                },
                {
                    "name": "position",
                    "type": "DialogPosition",
                    "optional": true,
                    "description": "<p>Position overrides. </p>\n",
                    "line": 73
                },
                {
                    "name": "restoreFocus",
                    "defaultValue": "true",
                    "type": "",
                    "optional": true,
                    "description": "<p>Whether the dialog should restore focus to the\npreviously-focused element, after it&#39;s closed.</p>\n",
                    "line": 94
                },
                {
                    "name": "role",
                    "defaultValue": "'dialog'",
                    "type": "DialogRole",
                    "optional": true,
                    "description": "<p>The ARIA role of the dialog element. </p>\n",
                    "line": 40
                },
                {
                    "name": "scrollStrategy",
                    "type": "ScrollStrategy",
                    "optional": true,
                    "description": "<p>Scroll strategy to be used for the dialog. </p>\n",
                    "line": 97
                },
                {
                    "name": "viewContainerRef",
                    "type": "ViewContainerRef",
                    "optional": true,
                    "description": "<p>Where the attached component should live in Angular&#39;s <em>logical</em> component tree.\nThis affects what is available for injection and the change detection order for the\ncomponent instantiated inside of the dialog. This does not affect where the dialog\ncontent will be rendered.</p>\n",
                    "line": 34
                },
                {
                    "name": "width",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": true,
                    "description": "<p>Width of the dialog. </p>\n",
                    "line": 55
                }
            ],
            "description": "<p>Configuration for opening a modal dialog with the SdsDialog service.</p>\n",
            "rawdescription": "Configuration for opening a modal dialog with the SdsDialog service.",
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SdsDialogRef",
            "id": "class-SdsDialogRef-aa7c3af4d9c8a7ebd932b36468b5f9a1",
            "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
            "type": "class",
            "sourceCode": "import {ESCAPE} from '@angular/cdk/keycodes';\r\nimport {GlobalPositionStrategy, OverlayRef} from '@angular/cdk/overlay';\r\nimport {Location} from '@angular/common';\r\nimport {Observable, Subject} from 'rxjs';\r\nimport {filter, take} from 'rxjs/operators';\r\nimport {DialogPosition} from './dialog-config';\r\nimport {SdsDialogContainerComponent} from './dialog-container.component';\r\n\r\n// Counter for unique dialog ids.\r\nlet uniqueId = 0;\r\n\r\n/**\r\n * Reference to a dialog opened via the SdsDialog service.\r\n */\r\nexport class SdsDialogRef<T, R = any> {\r\n  /** The instance of component opened into the dialog. */\r\n  componentInstance: T;\r\n\r\n  /** Whether the user is allowed to close the dialog. */\r\n  disableClose: boolean | undefined = this._containerInstance._config.disableClose;\r\n\r\n  /** Subject for notifying the user that the dialog has finished opening. */\r\n  private readonly _afterOpened = new Subject<void>();\r\n\r\n  /** Subject for notifying the user that the dialog has finished closing. */\r\n  private readonly _afterClosed = new Subject<R | undefined>();\r\n\r\n  /** Subject for notifying the user that the dialog has started closing. */\r\n  private readonly _beforeClosed = new Subject<R | undefined>();\r\n\r\n  /** Result to be passed to afterClosed. */\r\n  private _result: R | undefined;\r\n\r\n  constructor(\r\n    private _overlayRef: OverlayRef,\r\n    public _containerInstance: SdsDialogContainerComponent,\r\n    _location?: Location,\r\n    readonly id: string = `sds-dialog-${uniqueId++}`) {\r\n\r\n    // Pass the id along to the container.\r\n    _containerInstance._id = id;\r\n\r\n    // Emit when opening animation completes\r\n    _containerInstance._animationStateChanged.pipe(\r\n      filter(event => event.phaseName === 'done' && event.toState === 'enter'),\r\n      take(1)\r\n    )\r\n    .subscribe(() => {\r\n      this._afterOpened.next();\r\n      this._afterOpened.complete();\r\n    });\r\n\r\n    // Dispose overlay when closing animation is complete\r\n    _containerInstance._animationStateChanged.pipe(\r\n      filter(event => event.phaseName === 'done' && event.toState === 'exit'),\r\n      take(1)\r\n    ).subscribe(() => this._overlayRef.dispose());\r\n\r\n    _overlayRef.detachments().subscribe(() => {\r\n      this._beforeClosed.next(this._result);\r\n      this._beforeClosed.complete();\r\n      this._afterClosed.next(this._result);\r\n      this._afterClosed.complete();\r\n      this.componentInstance = null!;\r\n      this._overlayRef.dispose();\r\n    });\r\n\r\n    _overlayRef.keydownEvents()\r\n      .pipe(filter(event => event.keyCode === ESCAPE && !this.disableClose))\r\n      .subscribe(() => this.close());\r\n  }\r\n\r\n  /**\r\n   * Close the dialog.\r\n   * @param dialogResult Optional result to return to the dialog opener.\r\n   */\r\n  close(dialogResult?: R): void {\r\n    this._result = dialogResult;\r\n\r\n    // Transition the backdrop in parallel to the dialog.\r\n    this._containerInstance._animationStateChanged.pipe(\r\n      filter(event => event.phaseName === 'start'),\r\n      take(1)\r\n    )\r\n    .subscribe(() => {\r\n      this._beforeClosed.next(dialogResult);\r\n      this._beforeClosed.complete();\r\n      this._overlayRef.detachBackdrop();\r\n    });\r\n\r\n    this._containerInstance._startExitAnimation();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that is notified when the dialog is finished opening.\r\n   */\r\n  afterOpened(): Observable<void> {\r\n    return this._afterOpened.asObservable();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that is notified when the dialog is finished closing.\r\n   */\r\n  afterClosed(): Observable<R | undefined> {\r\n    return this._afterClosed.asObservable();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that is notified when the dialog has started closing.\r\n   */\r\n  beforeClosed(): Observable<R | undefined> {\r\n    return this._beforeClosed.asObservable();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that emits when the overlay's backdrop has been clicked.\r\n   */\r\n  backdropClick(): Observable<MouseEvent> {\r\n    return this._overlayRef.backdropClick();\r\n  }\r\n\r\n  /**\r\n   * Gets an observable that emits when keydown events are targeted on the overlay.\r\n   */\r\n  keydownEvents(): Observable<KeyboardEvent> {\r\n    return this._overlayRef.keydownEvents();\r\n  }\r\n\r\n  /**\r\n   * Updates the dialog's position.\r\n   * @param position New dialog position.\r\n   */\r\n  updatePosition(position?: DialogPosition): this {\r\n    const strategy = this._getPositionStrategy();\r\n\r\n    if (position && (position.left || position.right)) {\r\n      position.left ? strategy.left(position.left) : strategy.right(position.right);\r\n    } else {\r\n      strategy.centerHorizontally();\r\n    }\r\n\r\n    if (position && (position.top || position.bottom)) {\r\n      position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);\r\n    } else {\r\n      strategy.centerVertically();\r\n    }\r\n\r\n    this._overlayRef.updatePosition();\r\n\r\n    return this;\r\n  }\r\n\r\n  /**\r\n   * Updates the dialog's width and height.\r\n   * @param width New width of the dialog.\r\n   * @param height New height of the dialog.\r\n   */\r\n  updateSize(width: string = '', height: string = ''): this {\r\n    this._getPositionStrategy().width(width).height(height);\r\n    this._overlayRef.updatePosition();\r\n    return this;\r\n  }\r\n\r\n  /** Add a CSS class or an array of classes to the overlay pane. */\r\n  addPanelClass(classes: string | string[]): this {\r\n    this._overlayRef.addPanelClass(classes);\r\n    return this;\r\n  }\r\n\r\n  /** Remove a CSS class or an array of classes from the overlay pane. */\r\n  removePanelClass(classes: string | string[]): this {\r\n    this._overlayRef.removePanelClass(classes);\r\n    return this;\r\n  }\r\n\r\n  /** Fetches the position strategy object from the overlay ref. */\r\n  private _getPositionStrategy(): GlobalPositionStrategy {\r\n    return this._overlayRef.getConfig().positionStrategy as GlobalPositionStrategy;\r\n  }\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlayRef",
                        "type": "OverlayRef"
                    },
                    {
                        "name": "_containerInstance",
                        "type": "SdsDialogContainerComponent"
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "optional": true
                    },
                    {
                        "name": "id",
                        "type": "string",
                        "defaultValue": "`sds-dialog-${uniqueId++}`"
                    }
                ],
                "line": 32,
                "jsdoctags": [
                    {
                        "name": "_overlayRef",
                        "type": "OverlayRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_containerInstance",
                        "type": "SdsDialogContainerComponent",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_location",
                        "type": "Location",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "id",
                        "type": "string",
                        "defaultValue": "`sds-dialog-${uniqueId++}`",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "properties": [
                {
                    "name": "_afterClosed",
                    "defaultValue": "new Subject<R | undefined>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has finished closing. </p>\n",
                    "line": 26,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_afterOpened",
                    "defaultValue": "new Subject<void>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has finished opening. </p>\n",
                    "line": 23,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_beforeClosed",
                    "defaultValue": "new Subject<R | undefined>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subject for notifying the user that the dialog has started closing. </p>\n",
                    "line": 29,
                    "modifierKind": [
                        112,
                        132
                    ]
                },
                {
                    "name": "_containerInstance",
                    "type": "SdsDialogContainerComponent",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_result",
                    "type": "R | undefined",
                    "optional": false,
                    "description": "<p>Result to be passed to afterClosed. </p>\n",
                    "line": 32,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "componentInstance",
                    "type": "T",
                    "optional": false,
                    "description": "<p>The instance of component opened into the dialog. </p>\n",
                    "line": 17
                },
                {
                    "name": "disableClose",
                    "defaultValue": "this._containerInstance._config.disableClose",
                    "type": "boolean | undefined",
                    "optional": false,
                    "description": "<p>Whether the user is allowed to close the dialog. </p>\n",
                    "line": 20
                }
            ],
            "description": "<p>Reference to a dialog opened via the SdsDialog service.</p>\n",
            "rawdescription": "Reference to a dialog opened via the SdsDialog service.",
            "methods": [
                {
                    "name": "_getPositionStrategy",
                    "args": [],
                    "optional": false,
                    "returnType": "GlobalPositionStrategy",
                    "typeParameters": [],
                    "line": 177,
                    "description": "<p>Fetches the position strategy object from the overlay ref. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "addPanelClass",
                    "args": [
                        {
                            "name": "classes",
                            "type": "string | string[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 165,
                    "description": "<p>Add a CSS class or an array of classes to the overlay pane. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "classes",
                            "type": "string | string[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "afterClosed",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<R | undefined>",
                    "typeParameters": [],
                    "line": 104,
                    "description": "<p>Gets an observable that is notified when the dialog is finished closing.</p>\n"
                },
                {
                    "name": "afterOpened",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<void>",
                    "typeParameters": [],
                    "line": 97,
                    "description": "<p>Gets an observable that is notified when the dialog is finished opening.</p>\n"
                },
                {
                    "name": "backdropClick",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<MouseEvent>",
                    "typeParameters": [],
                    "line": 118,
                    "description": "<p>Gets an observable that emits when the overlay&#39;s backdrop has been clicked.</p>\n"
                },
                {
                    "name": "beforeClosed",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<R | undefined>",
                    "typeParameters": [],
                    "line": 111,
                    "description": "<p>Gets an observable that is notified when the dialog has started closing.</p>\n"
                },
                {
                    "name": "close",
                    "args": [
                        {
                            "name": "dialogResult",
                            "type": "R",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 77,
                    "description": "<p>Close the dialog.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2640,
                                "end": 2652,
                                "flags": 0,
                                "escapedText": "dialogResult"
                            },
                            "type": "R",
                            "optional": true,
                            "tagName": {
                                "pos": 2634,
                                "end": 2639,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Optional result to return to the dialog opener.</p>\n"
                        }
                    ]
                },
                {
                    "name": "keydownEvents",
                    "args": [],
                    "optional": false,
                    "returnType": "Observable<KeyboardEvent>",
                    "typeParameters": [],
                    "line": 125,
                    "description": "<p>Gets an observable that emits when keydown events are targeted on the overlay.</p>\n"
                },
                {
                    "name": "removePanelClass",
                    "args": [
                        {
                            "name": "classes",
                            "type": "string | string[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 171,
                    "description": "<p>Remove a CSS class or an array of classes from the overlay pane. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "classes",
                            "type": "string | string[]",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updatePosition",
                    "args": [
                        {
                            "name": "position",
                            "type": "DialogPosition",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 133,
                    "description": "<p>Updates the dialog&#39;s position.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4211,
                                "end": 4219,
                                "flags": 0,
                                "escapedText": "position"
                            },
                            "type": "DialogPosition",
                            "optional": true,
                            "tagName": {
                                "pos": 4205,
                                "end": 4210,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New dialog position.</p>\n"
                        }
                    ]
                },
                {
                    "name": "updateSize",
                    "args": [
                        {
                            "name": "width",
                            "type": "string",
                            "defaultValue": "''"
                        },
                        {
                            "name": "height",
                            "type": "string",
                            "defaultValue": "''"
                        }
                    ],
                    "optional": false,
                    "returnType": "",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Updates the dialog&#39;s width and height.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4893,
                                "end": 4898,
                                "flags": 0,
                                "escapedText": "width"
                            },
                            "type": "string",
                            "defaultValue": "''",
                            "tagName": {
                                "pos": 4887,
                                "end": 4892,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New width of the dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 4937,
                                "end": 4943,
                                "flags": 0,
                                "escapedText": "height"
                            },
                            "type": "string",
                            "defaultValue": "''",
                            "tagName": {
                                "pos": 4931,
                                "end": 4936,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>New height of the dialog.</p>\n"
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSHiercarchicalServiceSearchItem",
            "id": "class-SDSHiercarchicalServiceSearchItem-b94ad59f46be0ed842cf369dcc2b3610",
            "file": "libs/packages/components/src/lib/autocomplete-search/models/SDSAutocompleteServiceInterface.ts",
            "type": "class",
            "sourceCode": "import { Observable } from 'rxjs';\r\nexport interface SDSAutocompleteServiceInterface {\r\n    /**\r\n     * \r\n     * @param searchValue \r\n     */\r\n    getDataByText(currentItems: number, searchValue?: string): Observable<SDSHiercarchicalServiceResult>;\r\n}\r\n\r\nexport interface SDSHiercarchicalServiceResult {\r\n    /**\r\n     * \r\n     */\r\n    items: object[];\r\n\r\n    /**\r\n     * \r\n     */\r\n    totalItems: number;\r\n}\r\n\r\nexport class SDSHiercarchicalServiceSearchItem {\r\n\r\n    /**\r\n     * \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    searchValue: string;\r\n\r\n    /**\r\n     * \r\n     */\r\n    // sort: Sort;\r\n\r\n    /**\r\n     * \r\n     */\r\n    currentItemCount: number;\r\n}\r\n\r\n",
            "properties": [
                {
                    "name": "currentItemCount",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 42
                },
                {
                    "name": "id",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 27
                },
                {
                    "name": "searchValue",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 32
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSSelectedItemModel",
            "id": "class-SDSSelectedItemModel-7977a933dd6b5e815b9afd4d7c456a49",
            "file": "libs/packages/components/src/lib/selected-result/models/sds-selectedItem.model.ts",
            "type": "class",
            "sourceCode": "export class SDSSelectedItemModel {\r\n\r\n    /**\r\n     * List of items selected\r\n     */\r\n    public items: object[];\r\n\r\n    constructor() {\r\n        this.items = [];\r\n    }\r\n}\r\n",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 6
            },
            "properties": [
                {
                    "name": "items",
                    "type": "object[]",
                    "optional": false,
                    "description": "<p>List of items selected</p>\n",
                    "line": 6,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSSelectedItemModelHelper",
            "id": "class-SDSSelectedItemModelHelper-41c38ff72245279998e0f5c1938d1ffe",
            "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts",
            "type": "class",
            "sourceCode": "export class SDSSelectedItemModelHelper {\r\n\r\n    /**\r\n      *  adds an item to the collection\r\n      * if selected mode is single it removes any existing items\r\n      * also checks to see if that item already exists\r\n      * keyfield is used to determine uniqueness of the item added\r\n      * @param itemToAdd \r\n      * @param keyField \r\n      * @param selectionMode \r\n      * @param items \r\n      */\r\n    public static addItem(itemToAdd: object, keyField: string, selectionMode: SelectionMode, items: object[]) {\r\n        if (!SDSSelectedItemModelHelper.contatinsItem(itemToAdd[keyField], keyField, items)) {\r\n            if (selectionMode === SelectionMode.SINGLE) {\r\n                SDSSelectedItemModelHelper.clearItems(items);\r\n            }\r\n            items.push(itemToAdd);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * adds an array of items to the list and will not add duplicate items\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param toAddItems \r\n     * @param keyField \r\n     * @param selectionMode \r\n     * @param items \r\n     */\r\n    public static addItems(toAddItems: object[], keyField: string, selectionMode: SelectionMode, items: object[]) {\r\n        for (let i = 0; i < toAddItems.length; i++) {\r\n            SDSSelectedItemModelHelper.addItem(toAddItems[i], keyField, selectionMode, items);\r\n        }\r\n    }\r\n\r\n    /**\r\n     * removes the item from the list\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param item \r\n     * @param keyField \r\n     * @param items \r\n     */\r\n    public static removeItem(item: object, keyField: string, items: object[]) {\r\n        if (SDSSelectedItemModelHelper.contatinsItem(item[keyField], keyField, items)) {\r\n            items.splice(items.indexOf(item), 1)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * checks to see if a particular item exists by the provied key\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param key \r\n     * @param keyField \r\n     * @param items \r\n     */\r\n    public static contatinsItem(key: string, keyField: string, items: object[]): boolean {\r\n        let item = items.find(o => o[keyField] === key);\r\n        return item !== null && item !== undefined;\r\n    }\r\n\r\n    /**\r\n     * Clears the list of items\r\n     * @param items \r\n     */\r\n    public static clearItems(items: object[]) {\r\n        while (items.length > 0) {\r\n            items.pop();\r\n        }\r\n    }\r\n\r\n    /**\r\n     * updates an array of items to the list and will not add duplicate items\r\n     * keyfield is used to determine uniqueness of the item added\r\n     * @param selectedItems \r\n     * @param keyField \r\n     * @param selectionMode \r\n     * @param items \r\n     */\r\n    public static replaceItems(selectedItems: object[], keyField: string, selectionMode: SelectionMode, items: object[]) {\r\n        //Clears Old List\r\n        SDSSelectedItemModelHelper.clearItems(items);\r\n        //Adds new List\r\n        SDSSelectedItemModelHelper.addItems(selectedItems, keyField, selectionMode, items);\r\n    }\r\n}\r\n\r\nexport enum SelectionMode {\r\n    SINGLE, MULTIPLE\r\n}\r\n",
            "properties": [],
            "methods": [
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "itemToAdd",
                            "type": "object"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 13,
                    "description": "<p>adds an item to the collection\nif selected mode is single it removes any existing items\nalso checks to see if that item already exists\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 300,
                                "end": 309,
                                "flags": 0,
                                "escapedText": "itemToAdd"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 294,
                                "end": 299,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 327,
                                "end": 335,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 321,
                                "end": 326,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 353,
                                "end": 366,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 347,
                                "end": 352,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 384,
                                "end": 389,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 378,
                                "end": 383,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "addItems",
                    "args": [
                        {
                            "name": "toAddItems",
                            "type": "object[]"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30,
                    "description": "<p>adds an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 970,
                                "end": 980,
                                "flags": 0,
                                "escapedText": "toAddItems"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 964,
                                "end": 969,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 997,
                                "end": 1005,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 991,
                                "end": 996,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1022,
                                "end": 1035,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 1016,
                                "end": 1021,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1052,
                                "end": 1057,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1046,
                                "end": 1051,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "clearItems",
                    "args": [
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 65,
                    "description": "<p>Clears the list of items</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2279,
                                "end": 2284,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2273,
                                "end": 2278,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "contatinsItem",
                    "args": [
                        {
                            "name": "key",
                            "type": "string"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 56,
                    "description": "<p>checks to see if a particular item exists by the provied key\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1949,
                                "end": 1952,
                                "flags": 0,
                                "escapedText": "key"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1943,
                                "end": 1948,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1969,
                                "end": 1977,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1963,
                                "end": 1968,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1994,
                                "end": 1999,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1988,
                                "end": 1993,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43,
                    "description": "<p>removes the item from the list\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1486,
                                "end": 1490,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 1480,
                                "end": 1485,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1507,
                                "end": 1515,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1501,
                                "end": 1506,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 1532,
                                "end": 1537,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 1526,
                                "end": 1531,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "replaceItems",
                    "args": [
                        {
                            "name": "selectedItems",
                            "type": "object[]"
                        },
                        {
                            "name": "keyField",
                            "type": "string"
                        },
                        {
                            "name": "selectionMode",
                            "type": "SelectionMode"
                        },
                        {
                            "name": "items",
                            "type": "object[]"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 79,
                    "description": "<p>updates an array of items to the list and will not add duplicate items\nkeyfield is used to determine uniqueness of the item added</p>\n",
                    "modifierKind": [
                        115
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2596,
                                "end": 2609,
                                "flags": 0,
                                "escapedText": "selectedItems"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2590,
                                "end": 2595,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2626,
                                "end": 2634,
                                "flags": 0,
                                "escapedText": "keyField"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2620,
                                "end": 2625,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2651,
                                "end": 2664,
                                "flags": 0,
                                "escapedText": "selectionMode"
                            },
                            "type": "SelectionMode",
                            "tagName": {
                                "pos": 2645,
                                "end": 2650,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2681,
                                "end": 2686,
                                "flags": 0,
                                "escapedText": "items"
                            },
                            "type": "object[]",
                            "tagName": {
                                "pos": 2675,
                                "end": 2680,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SDSSelectedResultConfiguration",
            "id": "class-SDSSelectedResultConfiguration-6d42733017125d3c37e0254f23e71472",
            "file": "libs/packages/components/src/lib/selected-result/models/SDSSelectedResultConfiguration.ts",
            "type": "class",
            "sourceCode": "import { SelectionMode } from './sds-selected-item-model-helper';\r\n\r\nexport class SDSSelectedResultConfiguration {\r\n\r\n  /**\r\n   * Used to describe the drop down (Text should match the label that will be supplied)\r\n   */\r\n  public labelText: string;\r\n\r\n  /**\r\n   *  This is the primary field used to identify each object in the results\r\n   */\r\n  public primaryKeyField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the top part of the basic template\r\n   */\r\n  public primaryTextField: string;\r\n\r\n  /**\r\n   *  Property from supplied model used for the bottom part of the basic template\r\n   */\r\n  public secondaryTextField: string;\r\n\r\n  /**\r\n   * Mode of the model either allows a single item or multiple items\r\n   */\r\n  public selectionMode: SelectionMode = SelectionMode.SINGLE;\r\n}\r\n",
            "properties": [
                {
                    "name": "labelText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Used to describe the drop down (Text should match the label that will be supplied)</p>\n",
                    "line": 8,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryKeyField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>This is the primary field used to identify each object in the results</p>\n",
                    "line": 13,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "primaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the top part of the basic template</p>\n",
                    "line": 18,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "secondaryTextField",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Property from supplied model used for the bottom part of the basic template</p>\n",
                    "line": 23,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "selectionMode",
                    "defaultValue": "SelectionMode.SINGLE",
                    "type": "SelectionMode",
                    "optional": false,
                    "description": "<p>Mode of the model either allows a single item or multiple items</p>\n",
                    "line": 28,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        },
        {
            "name": "SideNavigationModel",
            "id": "class-SideNavigationModel-d25c2dec7563980ed43433307b1100a4",
            "file": "libs/packages/components/src/lib/side-navigation/model/side-navigation-model.ts",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '../../common-navigation/common-navigation-model';\r\n\r\nexport class SideNavigationModel {\r\n\r\n    /**\r\n     * \r\n     */\r\n    navigationLinks: NavigationLink[];\r\n}\r\n\r\n\r\nexport class NavigationLink implements Selectable, INavigationLink {\r\n\r\n    /**\r\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\r\n     */\r\n    mode: NavigationMode;\r\n\r\n    /**\r\n     * Text to be displayed in the link or button\r\n     */\r\n    text: string;\r\n\r\n    /**\r\n     * Navigation Route \r\n     */\r\n    route: string;\r\n\r\n    /**\r\n     * List of child navigation items that will show when no route is provieded\r\n     */\r\n    children?: NavigationLink[];\r\n\r\n    /**\r\n     * Identifier for the item when search for selected \r\n     */\r\n    id: string;\r\n\r\n    /**\r\n     * Status of if the item is selected \r\n     */\r\n    selected?: boolean;\r\n\r\n\r\n    /**\r\n     * Query string paramaters supporeted with external and internal links\r\n     * ex. { 'name': 'value',...}\r\n     */\r\n    queryParams?: {\r\n        [k: string]: any;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n",
            "properties": [
                {
                    "name": "navigationLinks",
                    "type": "NavigationLink[]",
                    "optional": false,
                    "description": "",
                    "line": 8
                }
            ],
            "methods": [],
            "indexSignatures": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": []
        }
    ],
    "directives": [
        {
            "name": "CollapseDirective",
            "id": "directive-CollapseDirective-8aa656abc3a969f3e783bd9da39fabfa",
            "file": "libs/packages/components/src/lib/collapse/collapse.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, HostBinding, Input } from '@angular/core';\r\n\r\n@Directive({\r\n  selector: '[sdsCollapse]',\r\n  exportAs: 'sdsCollapse',\r\n  host: {'[class.display-none]':'collapsed'}\r\n})\r\nexport class CollapseDirective {\r\n\r\n  @Input('sdsCollapse') collapsed: boolean = true;\r\n\r\n  constructor() {\r\n  }\r\n\r\n}\r\n",
            "selector": "[sdsCollapse]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsCollapse",
                    "defaultValue": "true",
                    "line": 10,
                    "type": "boolean"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 10
            }
        },
        {
            "name": "ExternalLinkDirective",
            "id": "directive-ExternalLinkDirective-ab3a8a6fa01cc6d68e1eeb6bb759f2ef",
            "file": "libs/packages/components/src/lib/external-link/external-link.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  AfterViewChecked,\r\n  ElementRef,\r\n  Renderer2,\r\n  Input,\r\n  ComponentFactoryResolver,\r\n  ViewContainerRef,\r\n  OnChanges\r\n} from '@angular/core';\r\nimport { faCoffee, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';\r\nimport { FaIconComponent } from '@fortawesome/angular-fontawesome';\r\n@Directive({\r\n  selector: 'a[href]'\r\n})\r\nexport class ExternalLinkDirective\r\n  implements OnChanges {\r\n    private vcRef: ViewContainerRef;\r\n  @Input() href: string;\r\n  @Input() public hideIcon: boolean = false;\r\n\r\n  private get hasExternalIcon (): boolean {\r\n    return this.el.nativeElement\r\n      .querySelectorAll('.sds-external-link')\r\n      .length > 0;\r\n  }\r\n\r\n  private get canRenderIcon (): boolean {\r\n    return !(this.hasExternalIcon || this.hideIcon);\r\n  }\r\n\r\n  private get isExternalLink (): boolean {\r\n    return this.href.replace(/^https?:\\/\\//,'').replace(/^www\\./, '').split('/')[0] != location.hostname;\r\n  }\r\n\r\n  constructor (\r\n    private el: ElementRef,\r\n    private renderer: Renderer2, private cfr: ComponentFactoryResolver , private vc : ViewContainerRef) {\r\n      \r\n    }\r\n\r\n    public ngOnChanges () {\r\n    if (!this.isExternalLink){\r\n      return;\r\n    }\r\n    if (this.canRenderIcon) {\r\n      this.createIcon();\r\n    }\r\n  }\r\n\r\n  private createIcon () {\r\n    // tslint:disable-next-line:no-unused-expression\r\n    this.vc.constructor.name === \"ViewContainerRef_\";\r\n    const factory = this.cfr.resolveComponentFactory(FaIconComponent);\r\n    const component = this.vc.createComponent(factory);\r\n    this.renderer.addClass(component.location.nativeElement, 'sds-external-link');\r\n    component.instance.iconProp = faExternalLinkAlt;\r\n    component.instance.ngOnChanges({});\r\n  }\r\n}\r\n",
            "selector": "a[href]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "hideIcon",
                    "defaultValue": "false",
                    "line": 20,
                    "type": "boolean"
                },
                {
                    "name": "href",
                    "line": 19,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "vcRef",
                    "type": "ViewContainerRef",
                    "optional": false,
                    "description": "",
                    "line": 18,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "createIcon",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 51,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "ngOnChanges",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "implements": [
                "OnChanges"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "el",
                        "type": "ElementRef"
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    },
                    {
                        "name": "cfr",
                        "type": "ComponentFactoryResolver"
                    },
                    {
                        "name": "vc",
                        "type": "ViewContainerRef"
                    }
                ],
                "line": 34,
                "jsdoctags": [
                    {
                        "name": "el",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "cfr",
                        "type": "ComponentFactoryResolver",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "vc",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "hasExternalIcon": {
                    "name": "hasExternalIcon",
                    "getSignature": {
                        "name": "hasExternalIcon",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 22
                    }
                },
                "canRenderIcon": {
                    "name": "canRenderIcon",
                    "getSignature": {
                        "name": "canRenderIcon",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 28
                    }
                },
                "isExternalLink": {
                    "name": "isExternalLink",
                    "getSignature": {
                        "name": "isExternalLink",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 32
                    }
                }
            }
        },
        {
            "name": "SdsAccordionDirective",
            "id": "directive-SdsAccordionDirective-ebdc530ce41c3a75d331ee42d0316dcd",
            "file": "libs/packages/components/src/lib/accordion/accordion.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  ContentChildren,\r\n  QueryList,\r\n  AfterContentInit\r\n} from \"@angular/core\";\r\n\r\nimport { CdkAccordion } from \"@angular/cdk/accordion\";\r\nimport { FocusKeyManager } from \"@angular/cdk/a11y\";\r\nimport { HOME, END } from \"@angular/cdk/keycodes\";\r\nimport {\r\n  SDS_ACCORDION,\r\n  SdsAccordionBase,\r\n  SdsAccordionDisplayMode\r\n} from \"./accordion-base\";\r\nimport { SdsAccordionItemHeaderComponent } from \"./accordion-item-header.component\";\r\n\r\n@Directive({\r\n  selector: \"sds-accordion\",\r\n  exportAs: \"sdsAccordion\",\r\n  inputs: [\"multi\"],\r\n  providers: [\r\n    {\r\n      provide: SDS_ACCORDION,\r\n      useExisting: SdsAccordionDirective\r\n    }\r\n  ],\r\n  host: {\r\n    'class': 'sds-accordion',\r\n    '[class.sds-accordion--basic]': 'displayMode === \"basic\"',\r\n  }\r\n})\r\nexport class SdsAccordionDirective extends CdkAccordion\r\n  implements SdsAccordionBase, AfterContentInit {\r\n  private _keyManager: FocusKeyManager<SdsAccordionItemHeaderComponent>;\r\n\r\n  @ContentChildren(SdsAccordionItemHeaderComponent, { descendants: true })\r\n  _headers: QueryList<SdsAccordionItemHeaderComponent>;\r\n\r\n  @Input() displayMode: SdsAccordionDisplayMode = \"default\";\r\n\r\n  ngAfterContentInit() {\r\n    this._keyManager = new FocusKeyManager(this._headers).withWrap();\r\n  }\r\n\r\n  /** Handles keyboard events coming in from the item headers. */\r\n  _handleHeaderKeydown(event: KeyboardEvent) {\r\n    const { keyCode } = event;\r\n    if (keyCode === HOME) {\r\n      this._keyManager.setFirstItemActive();\r\n      event.preventDefault();\r\n    } else if (keyCode === END) {\r\n      this._keyManager.setLastItemActive();\r\n      event.preventDefault();\r\n    } else {\r\n      this._keyManager.onKeydown(event);\r\n    }\r\n  }\r\n\r\n  _handleHeaderFocus(header: SdsAccordionItemHeaderComponent) {\r\n    this._keyManager.updateActiveItem(header);\r\n  }\r\n}\r\n",
            "selector": "sds-accordion",
            "providers": [
                {
                    "name": "{\n    provide: SDS_ACCORDION, useExisting: SdsAccordionDirective\n}",
                    "type": "directive"
                }
            ],
            "inputsClass": [
                {
                    "name": "displayMode",
                    "defaultValue": "\"default\"",
                    "line": 41,
                    "type": "SdsAccordionDisplayMode"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_headers",
                    "type": "QueryList<SdsAccordionItemHeaderComponent>",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "ContentChildren",
                            "stringifiedArguments": "SdsAccordionItemHeaderComponent, {descendants: true}"
                        }
                    ]
                },
                {
                    "name": "_keyManager",
                    "type": "FocusKeyManager<SdsAccordionItemHeaderComponent>",
                    "optional": false,
                    "description": "",
                    "line": 36,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_handleHeaderFocus",
                    "args": [
                        {
                            "name": "header",
                            "type": "SdsAccordionItemHeaderComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 61,
                    "jsdoctags": [
                        {
                            "name": "header",
                            "type": "SdsAccordionItemHeaderComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_handleHeaderKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 48,
                    "description": "<p>Handles keyboard events coming in from the item headers. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43
                }
            ],
            "implements": [
                "SdsAccordionBase",
                "AfterContentInit"
            ]
        },
        {
            "name": "SdsAccordionItemContentDirective",
            "id": "directive-SdsAccordionItemContentDirective-8676b0411a9a5aeae349a24933dbc0dd",
            "file": "libs/packages/components/src/lib/accordion/accordion-item-content.directive.ts",
            "type": "directive",
            "description": "<p>Accordion Item content that will be rendered lazily\nafter the accordion item is opened for the first time.</p>\n",
            "sourceCode": "import {Directive, TemplateRef} from '@angular/core';\r\n\r\n/**\r\n * Accordion Item content that will be rendered lazily\r\n * after the accordion item is opened for the first time.\r\n */\r\n@Directive({\r\n  selector: 'ng-template[sdsAccordionItemContent]'\r\n})\r\nexport class SdsAccordionItemContentDirective {\r\n  constructor(public _template: TemplateRef<any>) {}\r\n}\r\n",
            "selector": "ng-template[sdsAccordionItemContent]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_template",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 11,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_template",
                        "type": "TemplateRef<any>"
                    }
                ],
                "line": 10,
                "jsdoctags": [
                    {
                        "name": "_template",
                        "type": "TemplateRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SDSClickOutsideDirective",
            "id": "directive-SDSClickOutsideDirective-a1f5f043468f522388772e00b5fa52bc",
            "file": "libs/packages/components/src/lib/click-outside/click-outside.directive.ts",
            "type": "directive",
            "description": "<p>The <sam-click-outside> directive can detect whether a click is made inside \nthe target</p>\n",
            "sourceCode": "import {\r\n  Directive, ElementRef,\r\n  Output, EventEmitter,\r\n  HostListener\r\n} from '@angular/core';\r\n\r\n/**\r\n * The <sam-click-outside> directive can detect whether a click is made inside \r\n * the target\r\n */\r\n@Directive({\r\n  selector: '[sds-click-outside]'\r\n})\r\nexport class SDSClickOutsideDirective {\r\n  /**\r\n  * Event emitted when clicked outside the target\r\n  */\r\n  @Output() clickOutside = new EventEmitter();\r\n\r\n  constructor(private _elementRef: ElementRef) { }\r\n\r\n  @HostListener('document:click', ['$event.target'])\r\n  public onClick(targetElement) {\r\n    const clickedInside =\r\n      this._elementRef.nativeElement.contains(targetElement);\r\n    if (!clickedInside) {\r\n      this.clickOutside.emit(undefined);\r\n    }\r\n  }\r\n}\r\n",
            "selector": "[sds-click-outside]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "clickOutside",
                    "defaultValue": "new EventEmitter()",
                    "description": "<p>Event emitted when clicked outside the target</p>\n",
                    "line": 18,
                    "type": "EventEmitter"
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "document:click",
                    "args": [
                        {
                            "name": "targetElement",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event.target"
                    ],
                    "line": 23
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    }
                ],
                "line": 18,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsDialogActionsDirective",
            "id": "directive-SdsDialogActionsDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Container for the bottom action buttons in a dialog.\nStays fixed to the bottom when scrolling.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogCloseDirective",
            "id": "directive-SdsDialogCloseDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Button that will close the current dialog.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "button[sds-dialog-close], button[sdsDialogClose]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "aria-label",
                    "description": "<p>Screenreader label for the button. </p>\n",
                    "line": 31,
                    "type": "string"
                },
                {
                    "name": "sds-dialog-close",
                    "description": "<p>Dialog close input. </p>\n",
                    "line": 34,
                    "type": "any"
                },
                {
                    "name": "sdsDialogClose",
                    "line": 36,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "dialogRef",
                    "type": "SdsDialogRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "decorators": [
                        {
                            "name": "Optional",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnChanges",
                    "args": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 54,
                    "jsdoctags": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 43
                }
            ],
            "implements": [
                "OnInit",
                "OnChanges"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "dialogRef",
                        "type": "SdsDialogRef<any>"
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService"
                    }
                ],
                "line": 36,
                "jsdoctags": [
                    {
                        "name": "dialogRef",
                        "type": "SdsDialogRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsDialogContentDirective",
            "id": "directive-SdsDialogContentDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Scrollable content container of a dialog.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-content], sds-dialog-content, [sdsDialogContent]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogSubtitleDirective",
            "id": "directive-SdsDialogSubtitleDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>SubTitle of a dialog element</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsDialogTitleDirective",
            "id": "directive-SdsDialogTitleDirective-3d0823eb51e60df8943d560c1d76a2f3",
            "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
            "type": "directive",
            "description": "<p>Title of a dialog element. Stays fixed to the top of the dialog when scrolling.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Input,\r\n  OnChanges,\r\n  OnInit,\r\n  Optional,\r\n  SimpleChanges,\r\n  ElementRef,\r\n} from '@angular/core';\r\nimport {SdsDialogService} from './dialog';\r\nimport {SdsDialogRef} from './dialog-ref';\r\n\r\n/** Counter used to generate unique IDs for dialog elements. */\r\nlet dialogElementUid = 0;\r\n\r\n/**\r\n * Button that will close the current dialog.\r\n */\r\n@Directive({\r\n  selector: `button[sds-dialog-close], button[sdsDialogClose]`,\r\n  exportAs: 'sdsDialogClose',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '(click)': 'dialogRef.close(dialogResult)',\r\n    '[attr.aria-label]': 'ariaLabel || null',\r\n    'type': 'button', // Prevents accidental form submits.\r\n  }\r\n})\r\nexport class SdsDialogCloseDirective implements OnInit, OnChanges {\r\n  /** Screenreader label for the button. */\r\n  @Input('aria-label') ariaLabel: string;\r\n\r\n  /** Dialog close input. */\r\n  @Input('sds-dialog-close') dialogResult: any;\r\n\r\n  @Input('sdsDialogClose') _sdsDialogClose: any;\r\n\r\n  constructor(\r\n    @Optional() public dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this.dialogRef) {\r\n      // When this directive is included in a dialog via TemplateRef (rather than being\r\n      // in a Component), the DialogRef isn't available via injection because embedded\r\n      // views cannot be given a custom injector. Instead, we look up the DialogRef by\r\n      // ID. This must occur in `onInit`, as the ID binding for the dialog container won't\r\n      // be resolved at constructor time.\r\n      this.dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    const proxiedChange = changes['_sdsDialogClose'] || changes['_sdsDialogCloseResult'];\r\n\r\n    if (proxiedChange) {\r\n      this.dialogResult = proxiedChange.currentValue;\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * Title of a dialog element. Stays fixed to the top of the dialog when scrolling.\r\n */\r\n@Directive({\r\n  selector: '[sds-dialog-title], [sdsDialogTitle]',\r\n  exportAs: 'sdsDialogTitle',\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    '[class.sds-dialog-title]': 'true',\r\n    '[id]': 'id',\r\n  },\r\n})\r\nexport class SdsDialogTitleDirective implements OnInit {\r\n  @Input() id = `sds-dialog-title-${dialogElementUid++}`;\r\n\r\n  constructor(\r\n    @Optional() private _dialogRef: SdsDialogRef<any>,\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _dialog: SdsDialogService) {}\r\n\r\n  ngOnInit() {\r\n    if (!this._dialogRef) {\r\n      this._dialogRef = getClosestDialog(this._elementRef, this._dialog.openDialogs)!;\r\n    }\r\n\r\n    if (this._dialogRef) {\r\n      Promise.resolve().then(() => {\r\n        const container = this._dialogRef._containerInstance;\r\n\r\n        if (container && !container._ariaLabelledBy) {\r\n          container._ariaLabelledBy = this.id;\r\n        }\r\n      });\r\n    }\r\n  }\r\n}\r\n\r\n/**\r\n * SubTitle of a dialog element\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-subtitle], sds-dialog-subtitle, [sdsDialogSubtitle]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-subtitle]': 'true'}\r\n})\r\nexport class SdsDialogSubtitleDirective {}\r\n\r\n\r\n/**\r\n * Scrollable content container of a dialog.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-content], sds-dialog-content, [sdsDialogContent]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-content]': 'true'}\r\n})\r\nexport class SdsDialogContentDirective {}\r\n\r\n\r\n/**\r\n * Container for the bottom action buttons in a dialog.\r\n * Stays fixed to the bottom when scrolling.\r\n */\r\n@Directive({\r\n  selector: `[sds-dialog-actions], sds-dialog-actions, [sdsDialogActions]`,\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {'[class.sds-dialog-actions]': 'true'}\r\n})\r\nexport class SdsDialogActionsDirective {}\r\n\r\n\r\n/**\r\n * Finds the closest SdsDialogRef to an element by looking at the DOM.\r\n * @param element Element relative to which to look for a dialog.\r\n * @param openDialogs References to the currently-open dialogs.\r\n */\r\nfunction getClosestDialog(element: ElementRef<HTMLElement>, openDialogs: SdsDialogRef<any>[]) {\r\n  let parent: HTMLElement | null = element.nativeElement.parentElement;\r\n\r\n  while (parent && !parent.classList.contains('sds-dialog__container')) {\r\n    parent = parent.parentElement;\r\n  }\r\n\r\n  return parent ? openDialogs.find(dialog => dialog.id === parent!.id) : null;\r\n}\r\n",
            "selector": "[sds-dialog-title], [sdsDialogTitle]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "id",
                    "defaultValue": "`sds-dialog-title-${dialogElementUid++}`",
                    "line": 76
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 83
                }
            ],
            "implements": [
                "OnInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_dialogRef",
                        "type": "SdsDialogRef<any>"
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService"
                    }
                ],
                "line": 76,
                "jsdoctags": [
                    {
                        "name": "_dialogRef",
                        "type": "SdsDialogRef<any>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_dialog",
                        "type": "SdsDialogService",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsMenuTriggerForDirective",
            "id": "directive-SdsMenuTriggerForDirective-2a338fd251ec910c6fd8566d6e6c523a",
            "file": "libs/packages/components/src/lib/menu/menu-trigger.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  ElementRef,\r\n  EventEmitter,\r\n  Input,\r\n  OnDestroy,\r\n  Output,\r\n  ViewContainerRef,\r\n  HostBinding,\r\n  HostListener,\r\n} from '@angular/core';\r\nimport {\r\n  FocusMonitor,\r\n  FocusOrigin,\r\n  isFakeMousedownFromScreenReader\r\n} from '@angular/cdk/a11y';\r\nimport {\r\n  FlexibleConnectedPositionStrategy,\r\n  HorizontalConnectionPos,\r\n  Overlay,\r\n  OverlayConfig,\r\n  OverlayRef,\r\n  VerticalConnectionPos\r\n} from '@angular/cdk/overlay';\r\nimport { TemplatePortal } from '@angular/cdk/portal';\r\nimport { normalizePassiveListenerOptions } from '@angular/cdk/platform';\r\nimport { merge, Subscription } from 'rxjs';\r\nimport {\r\n  SdsMenuInterface,\r\n  SdsMenuComponent,\r\n  MenuPositionX,\r\n  MenuPositionY\r\n} from './menu.component';\r\n\r\n@Directive({\r\n  selector: '[sdsMenuTriggerFor]'\r\n})\r\nexport class SdsMenuTriggerForDirective implements OnDestroy {\r\n  /** ARIA haspopup for the menu trigger. */\r\n  @HostBinding('attr.aria-haspopup') ariaHasPopup = true;\r\n\r\n  /** ARIA expanded for the menu trigger. */\r\n  @HostBinding('attr.aria-expanded')\r\n  get menuOpen(): boolean {\r\n    return this._menuOpen;\r\n  }\r\n\r\n  /** Holds the menu instance */\r\n  private _menu: SdsMenuInterface;\r\n\r\n  /** Holds value for menuOpen variable */\r\n  private _menuOpen = false;\r\n\r\n  /** CDK Portal for menu panel */\r\n  private _portal: TemplatePortal;\r\n\r\n  /** PortalOutlet */\r\n  private _overlayRef: OverlayRef | null = null;\r\n\r\n  /** Tracks input type  */\r\n  private _openedBy: 'mouse' | 'touch' | null = null;\r\n\r\n  private _closingActionsSubscription = Subscription.EMPTY;\r\n  private _menuCloseSubscription = Subscription.EMPTY;\r\n\r\n  /** References the menu instance that the trigger is associated with. */\r\n  @Input('sdsMenuTriggerFor')\r\n  get menu() {\r\n    return this._menu;\r\n  }\r\n  set menu(menu: SdsMenuInterface) {\r\n    if (menu === this._menu) {\r\n      return;\r\n    }\r\n    this._menu = menu;\r\n    this._menuCloseSubscription.unsubscribe();\r\n\r\n    if (menu) {\r\n      this._menuCloseSubscription = menu.closed.asObservable().subscribe(() => {\r\n        this._destroyMenu();\r\n      });\r\n    }\r\n  }\r\n\r\n  /** Event emitted when the associated menu is opened. */\r\n  @Output() menuOpened: EventEmitter<void> = new EventEmitter<void>();\r\n\r\n  /** Event emitted when the associated menu is closed. */\r\n  @Output() menuClosed: EventEmitter<void> = new EventEmitter<void>();\r\n\r\n  /** Handles mouse presses on the trigger. */\r\n  @HostListener('mousedown', ['$event'])\r\n  _handleMousedown(event: MouseEvent): void {\r\n    if (!isFakeMousedownFromScreenReader(event)) {\r\n      // Since right or middle button clicks won't trigger the `click` event,\r\n      // we shouldn't consider the menu as opened by mouse in those cases.\r\n      this._openedBy = event.button === 0 ? 'mouse' : null;\r\n    }\r\n  }\r\n\r\n  /** Toggles the menu between the open and closed states. */\r\n  @HostListener('click')\r\n  toggleMenu(): void {\r\n    return this._menuOpen ? this.closeMenu() : this.openMenu();\r\n  }\r\n\r\n  constructor(\r\n    private _overlay: Overlay,\r\n    private _element: ElementRef<HTMLElement>,\r\n    private _viewContainerRef: ViewContainerRef,\r\n    private _focusMonitor: FocusMonitor\r\n  ) {\r\n    // On touch devices set _openedBy to 'touch'\r\n    _element.nativeElement.addEventListener(\r\n      'touchstart',\r\n      () => (this._openedBy = 'touch'),\r\n      normalizePassiveListenerOptions({ passive: true })\r\n    );\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    if (this._overlayRef) {\r\n      this._overlayRef.dispose();\r\n      this._overlayRef = null;\r\n    }\r\n\r\n    this._element.nativeElement.removeEventListener(\r\n      'touchstart',\r\n      () => (this._openedBy = 'touch'),\r\n      normalizePassiveListenerOptions({ passive: true })\r\n    );\r\n\r\n    this._menuCloseSubscription.unsubscribe();\r\n    this._closingActionsSubscription.unsubscribe();\r\n  }\r\n\r\n  /** Opens the menu. */\r\n  openMenu(): void {\r\n    if (this._menuOpen) {\r\n      return;\r\n    }\r\n    const overlayRef = this._createOverlay();\r\n    const overlayConfig = overlayRef.getConfig();\r\n    this._setPosition(\r\n      overlayConfig.positionStrategy as FlexibleConnectedPositionStrategy\r\n    );\r\n    overlayRef.attach(this._getPortal());\r\n    this._closingActionsSubscription = this._menuClosingActions().subscribe(\r\n      () => this.closeMenu()\r\n    );\r\n    this._initMenu();\r\n    if (this.menu instanceof SdsMenuComponent) {\r\n      this.menu._startAnimation();\r\n    }\r\n  }\r\n\r\n  /** Closes the menu. */\r\n  closeMenu(): void {\r\n    this.menu.closed.emit();\r\n  }\r\n\r\n  /** Focuses the menu trigger. */\r\n  focus(origin: FocusOrigin = 'program'): void {\r\n    this._focusMonitor.focusVia(this._element, origin);\r\n  }\r\n\r\n  /** This method sets the menu state to open and focuses the first item */\r\n  private _initMenu(): void {\r\n    this._setIsMenuOpen(true);\r\n    this.menu.focusFirstItem(this._openedBy || 'program');\r\n  }\r\n\r\n  /** sets open state */\r\n  private _setIsMenuOpen(isOpen: boolean): void {\r\n    this._menuOpen = isOpen;\r\n    this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit();\r\n  }\r\n\r\n  /**\r\n   * This method resets the menu when it's closed,\r\n   * most importantly restoring focus to the menu trigger\r\n   */\r\n  private _resetMenu(): void {\r\n    this._setIsMenuOpen(false);\r\n\r\n    if (!this._openedBy) {\r\n      this.focus();\r\n    } else {\r\n      this.focus(this._openedBy);\r\n    }\r\n\r\n    this._openedBy = null;\r\n  }\r\n\r\n  /** Closes the menu and does the necessary cleanup. */\r\n  private _destroyMenu() {\r\n    if (!this._overlayRef || !this.menuOpen) {\r\n      return;\r\n    }\r\n\r\n    this._closingActionsSubscription.unsubscribe();\r\n\r\n    this._overlayRef.detach();\r\n\r\n    if (this.menu instanceof SdsMenuComponent) {\r\n      this.menu._resetAnimation();\r\n      this._resetMenu();\r\n    }\r\n    \r\n  }\r\n\r\n  /**\r\n   * This method creates the overlay from the provided menu's template and saves its\r\n   * OverlayRef so that it can be attached to the DOM when openMenu is called.\r\n   */\r\n  private _createOverlay(): OverlayRef {\r\n    if (!this._overlayRef) {\r\n      const config = this._getOverlayConfig();\r\n      this._subscribeToPositions(\r\n        config.positionStrategy as FlexibleConnectedPositionStrategy\r\n      );\r\n      this._overlayRef = this._overlay.create(config);\r\n      this._overlayRef.keydownEvents().subscribe();\r\n    }\r\n    return this._overlayRef;\r\n  }\r\n\r\n  /**\r\n   * This method builds the configuration object needed to create the overlay, the OverlayState.\r\n   * @returns OverlayConfig\r\n   */\r\n  private _getOverlayConfig(): OverlayConfig {\r\n    return new OverlayConfig({\r\n      positionStrategy: this._overlay\r\n        .position()\r\n        .flexibleConnectedTo(this._element)\r\n        .withLockedPosition()\r\n        .withTransformOriginOn('.sds-overlay'),\r\n      hasBackdrop: true,\r\n      backdropClass: 'cdk-overlay-transparent-backdrop',\r\n      scrollStrategy: this._overlay.scrollStrategies.reposition()\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Listens to changes in the position of the overlay and sets the correct classes\r\n   * on the menu based on the new position.\r\n   */\r\n  private _subscribeToPositions(\r\n    position: FlexibleConnectedPositionStrategy\r\n  ): void {\r\n    position.positionChanges.subscribe(change => {\r\n      const posX: MenuPositionX =\r\n        change.connectionPair.overlayX === 'start' ? 'after' : 'before';\r\n      const posY: MenuPositionY =\r\n        change.connectionPair.overlayY === 'top' ? 'below' : 'above';\r\n\r\n      this.menu.setPositionClasses(posX, posY);\r\n    });\r\n  }\r\n\r\n  /**\r\n   * Sets the appropriate positions on a position strategy\r\n   * so the overlay connects with the trigger correctly.\r\n   */\r\n  private _setPosition(positionStrategy: FlexibleConnectedPositionStrategy) {\r\n    const [originX, originFallbackX]: HorizontalConnectionPos[] =\r\n      this.menu.xPosition === 'before' ? ['end', 'start'] : ['start', 'end'];\r\n\r\n    const [overlayY, overlayFallbackY]: VerticalConnectionPos[] =\r\n      this.menu.yPosition === 'above' ? ['bottom', 'top'] : ['top', 'bottom'];\r\n\r\n    let [originY, originFallbackY] = [overlayY, overlayFallbackY];\r\n    const [overlayX, overlayFallbackX] = [originX, originFallbackX];\r\n    const offsetY = 0;\r\n\r\n    if (!this.menu.overlapTrigger) {\r\n      originY = overlayY === 'top' ? 'bottom' : 'top';\r\n      originFallbackY = overlayFallbackY === 'top' ? 'bottom' : 'top';\r\n    }\r\n\r\n    // Positions from most to least desirable\r\n    positionStrategy.withPositions([\r\n      { originX, originY, overlayX, overlayY, offsetY },\r\n      {\r\n        originX: originFallbackX,\r\n        originY,\r\n        overlayX: overlayFallbackX,\r\n        overlayY,\r\n        offsetY\r\n      },\r\n      {\r\n        originX,\r\n        originY: originFallbackY,\r\n        overlayX,\r\n        overlayY: overlayFallbackY,\r\n        offsetY: -offsetY\r\n      },\r\n      {\r\n        originX: originFallbackX,\r\n        originY: originFallbackY,\r\n        overlayX: overlayFallbackX,\r\n        overlayY: overlayFallbackY,\r\n        offsetY: -offsetY\r\n      }\r\n    ]);\r\n  }\r\n\r\n  /** Returns a stream that emits whenever an action that should close the menu occurs. */\r\n  private _menuClosingActions() {\r\n    const backdrop = this._overlayRef.backdropClick();\r\n    const detachments = this._overlayRef.detachments();\r\n    return merge(backdrop, detachments);\r\n  }\r\n\r\n  /** Gets the portal that should be attached to the overlay. */\r\n  private _getPortal(): TemplatePortal {\r\n    if (!this._portal || this._portal.templateRef !== this.menu.templateRef) {\r\n      this._portal = new TemplatePortal(\r\n        this.menu.templateRef,\r\n        this._viewContainerRef\r\n      );\r\n    }\r\n    return this._portal;\r\n  }\r\n}\r\n",
            "selector": "[sdsMenuTriggerFor]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsMenuTriggerFor",
                    "description": "<p>References the menu instance that the trigger is associated with. </p>\n",
                    "line": 68
                }
            ],
            "outputsClass": [
                {
                    "name": "menuClosed",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>Event emitted when the associated menu is closed. </p>\n",
                    "line": 89,
                    "type": "EventEmitter<void>"
                },
                {
                    "name": "menuOpened",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>Event emitted when the associated menu is opened. </p>\n",
                    "line": 86,
                    "type": "EventEmitter<void>"
                }
            ],
            "hostBindings": [
                {
                    "name": "attr.aria-expanded",
                    "description": "<p>ARIA expanded for the menu trigger. </p>\n",
                    "line": 44,
                    "type": "boolean"
                },
                {
                    "name": "attr.aria-haspopup",
                    "defaultValue": "true",
                    "description": "<p>ARIA haspopup for the menu trigger. </p>\n",
                    "line": 40
                }
            ],
            "hostListeners": [
                {
                    "name": "click",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Toggles the menu between the open and closed states. </p>\n",
                    "line": 103
                },
                {
                    "name": "mousedown",
                    "args": [
                        {
                            "name": "event",
                            "type": "MouseEvent"
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "description": "<p>Handles mouse presses on the trigger. </p>\n",
                    "line": 93
                }
            ],
            "propertiesClass": [
                {
                    "name": "_closingActionsSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 63,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menu",
                    "type": "SdsMenuInterface",
                    "optional": false,
                    "description": "<p>Holds the menu instance </p>\n",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuCloseSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 64,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuOpen",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds value for menuOpen variable </p>\n",
                    "line": 52,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_openedBy",
                    "defaultValue": "null",
                    "type": "\"mouse\" | \"touch\" | null",
                    "optional": false,
                    "description": "<p>Tracks input type  </p>\n",
                    "line": 61,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayRef",
                    "defaultValue": "null",
                    "type": "OverlayRef | null",
                    "optional": false,
                    "description": "<p>PortalOutlet </p>\n",
                    "line": 58,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_portal",
                    "type": "TemplatePortal",
                    "optional": false,
                    "description": "<p>CDK Portal for menu panel </p>\n",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_createOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "OverlayRef",
                    "typeParameters": [],
                    "line": 216,
                    "description": "<p>This method creates the overlay from the provided menu&#39;s template and saves its\nOverlayRef so that it can be attached to the DOM when openMenu is called.</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_destroyMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 196,
                    "description": "<p>Closes the menu and does the necessary cleanup. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getOverlayConfig",
                    "args": [],
                    "optional": false,
                    "returnType": "OverlayConfig",
                    "typeParameters": [],
                    "line": 232,
                    "description": "<p>This method builds the configuration object needed to create the overlay, the OverlayState.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "tagName": {
                                "pos": 6410,
                                "end": 6417,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>OverlayConfig</p>\n"
                        }
                    ]
                },
                {
                    "name": "_getPortal",
                    "args": [],
                    "optional": false,
                    "returnType": "TemplatePortal",
                    "typeParameters": [],
                    "line": 317,
                    "description": "<p>Gets the portal that should be attached to the overlay. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_initMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 168,
                    "description": "<p>This method sets the menu state to open and focuses the first item </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_menuClosingActions",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 310,
                    "description": "<p>Returns a stream that emits whenever an action that should close the menu occurs. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_resetMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183,
                    "description": "<p>This method resets the menu when it&#39;s closed,\nmost importantly restoring focus to the menu trigger</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_setIsMenuOpen",
                    "args": [
                        {
                            "name": "isOpen",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 174,
                    "description": "<p>sets open state </p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "isOpen",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_setPosition",
                    "args": [
                        {
                            "name": "positionStrategy",
                            "type": "FlexibleConnectedPositionStrategy"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 266,
                    "description": "<p>Sets the appropriate positions on a position strategy\nso the overlay connects with the trigger correctly.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "positionStrategy",
                            "type": "FlexibleConnectedPositionStrategy",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_subscribeToPositions",
                    "args": [
                        {
                            "name": "position",
                            "type": "FlexibleConnectedPositionStrategy"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 249,
                    "description": "<p>Listens to changes in the position of the overlay and sets the correct classes\non the menu based on the new position.</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "position",
                            "type": "FlexibleConnectedPositionStrategy",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "closeMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Closes the menu. </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 163,
                    "description": "<p>Focuses the menu trigger. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 121
                },
                {
                    "name": "openMenu",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>Opens the menu. </p>\n"
                }
            ],
            "implements": [
                "OnDestroy"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    }
                ],
                "line": 105,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "menu": {
                    "name": "menu",
                    "setSignature": {
                        "name": "menu",
                        "type": "void",
                        "args": [
                            {
                                "name": "menu",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 71,
                        "jsdoctags": [
                            {
                                "name": "menu",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsObserveWidthDirective",
            "id": "directive-SdsObserveWidthDirective-be9ff768900b34491eace1ceaf784afa",
            "file": "libs/packages/components/src/lib/observers/observe-width.directive.ts",
            "type": "directive",
            "description": "<p>Directive that triggers a callback whenever the width of\nits associated element has changed.</p>\n",
            "sourceCode": "import {\r\n  Directive,\r\n  Output,\r\n  EventEmitter,\r\n  ElementRef,\r\n  OnInit,\r\n  OnDestroy\r\n} from '@angular/core';\r\nimport { ViewportRuler } from '@angular/cdk/overlay';\r\nimport { startWith } from 'rxjs/operators';\r\nimport { Subscription } from 'rxjs';\r\n\r\n/**\r\n * Directive that triggers a callback whenever the width of\r\n * its associated element has changed.\r\n */\r\n@Directive({ selector: '[sdsObserveWidth]' })\r\nexport class SdsObserveWidthDirective implements OnInit, OnDestroy {\r\n  /** Event emitted for each change in the element's width. */\r\n  @Output('sdsObserveWidth') elementWidth = new EventEmitter<number>();\r\n\r\n  /** Subscription to window resize stream */\r\n  windowResize$: Subscription;\r\n\r\n  constructor(\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private viewportRuler: ViewportRuler\r\n  ) {}\r\n\r\n  ngOnInit() {\r\n    this.windowResize$ = this.viewportRuler\r\n      .change(0)\r\n      .pipe(startWith(this._getElementWidth()))\r\n      .subscribe(() => this._emitEvent());\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this.windowResize$.unsubscribe();\r\n  }\r\n\r\n  _emitEvent() {\r\n    const width = this._getElementWidth();\r\n    this.elementWidth.emit(width);\r\n  }\r\n\r\n  _getElementWidth(): number {\r\n    return this._elementRef.nativeElement.offsetWidth;\r\n  }\r\n}\r\n",
            "selector": "[sdsObserveWidth]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "sdsObserveWidth",
                    "defaultValue": "new EventEmitter<number>()",
                    "description": "<p>Event emitted for each change in the element&#39;s width. </p>\n",
                    "line": 20,
                    "type": "EventEmitter"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "windowResize$",
                    "type": "Subscription",
                    "optional": false,
                    "description": "<p>Subscription to window resize stream </p>\n",
                    "line": 23
                }
            ],
            "methodsClass": [
                {
                    "name": "_emitEvent",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 41
                },
                {
                    "name": "_getElementWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 46
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30
                }
            ],
            "implements": [
                "OnInit",
                "OnDestroy"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler"
                    }
                ],
                "line": 23,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsPopupDirective",
            "id": "directive-SdsPopupDirective-8fddb6001086097a3983772becea7e73",
            "file": "libs/packages/components/src/lib/popup/popup.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, Input, ElementRef, Renderer2, AfterViewInit, OnInit } from '@angular/core';\r\n\r\n\r\n@Directive({\r\n  selector: '[sdsPopup]',\r\n  exportAs: 'sdsPopup'\r\n})\r\nexport class SdsPopupDirective implements AfterViewInit {\r\n  @Input() sdsPopup: HTMLElement;\r\n  @Input() position: string;\r\n  @Input() placement: string;\r\n  sdsPopupDiv: HTMLElement;\r\n\r\n  constructor(private el: ElementRef, private renderer: Renderer2) {\r\n    this.renderer.addClass(this.el.nativeElement, 'sds-popup');\r\n    this.sdsPopupDiv = document.createElement('div');\r\n    this.renderer.addClass(this.sdsPopupDiv, 'sds-popup__content');\r\n  }\r\n\r\n\r\n  ngAfterViewInit() {\r\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopup);\r\n    this.renderer.addClass(this.sdsPopupDiv, this.placement);\r\n    this.renderer.addClass(this.sdsPopupDiv, this.position);\r\n    this.renderer.appendChild(this.sdsPopupDiv, this.el.nativeElement.children[0]);\r\n    this.renderer.appendChild(this.el.nativeElement, this.sdsPopupDiv);\r\n  }\r\n}\r\n",
            "selector": "[sdsPopup]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "placement",
                    "line": 11,
                    "type": "string"
                },
                {
                    "name": "position",
                    "line": 10,
                    "type": "string"
                },
                {
                    "name": "sdsPopup",
                    "line": 9,
                    "type": "HTMLElement"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "sdsPopupDiv",
                    "type": "HTMLElement",
                    "optional": false,
                    "description": "",
                    "line": 12
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 21
                }
            ],
            "implements": [
                "AfterViewInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "el",
                        "type": "ElementRef"
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    }
                ],
                "line": 12,
                "jsdoctags": [
                    {
                        "name": "el",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SDSTabOutsideDirective",
            "id": "directive-SDSTabOutsideDirective-c7a3bf23d725d659c87c8ce6f48ad44e",
            "file": "libs/packages/components/src/lib/tab-outside/taboutside.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive, ElementRef, Output,\r\n  EventEmitter, HostListener\r\n} from '@angular/core';\r\n\r\n\r\n@Directive({\r\n  selector: '[sds-tab-outside]'\r\n})\r\nexport class SDSTabOutsideDirective {\r\n  /**\r\n   * Emitter for tabOutside event\r\n   */\r\n  @Output() tabOutside: EventEmitter<any> = new EventEmitter();\r\n\r\n  constructor(private _elementRef: ElementRef) { }\r\n\r\n  @HostListener('document:keyup', ['$event.target'])\r\n  public hasFocusChanged(target) {\r\n    const isInsideHost = this._elementRef.nativeElement.contains(target);\r\n    if (!isInsideHost) {\r\n      this.tabOutside.emit(undefined);\r\n    }\r\n  }\r\n}\r\n",
            "selector": "[sds-tab-outside]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "tabOutside",
                    "defaultValue": "new EventEmitter()",
                    "description": "<p>Emitter for tabOutside event</p>\n",
                    "line": 14,
                    "type": "EventEmitter<any>"
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "document:keyup",
                    "args": [
                        {
                            "name": "target",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event.target"
                    ],
                    "line": 19
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    }
                ],
                "line": 14,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsToolbarExpandDirective",
            "id": "directive-SdsToolbarExpandDirective-4d0224470e89ee31acd753d3e38ede83",
            "file": "libs/packages/components/src/lib/toolbar/toolbar-expand.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import { Directive, ElementRef, Input, Renderer2, OnInit } from \"@angular/core\";\r\nimport { SdsToolbarComponent } from \"./toolbar.component\";\r\n\r\n@Directive({\r\n  selector: \"[sdsToolbarExpand]\"\r\n})\r\nexport class SdsToolbarExpandDirective implements OnInit {\r\n  /** Width of the toolbar while expanded. */\r\n  _expandedWidth: string;\r\n\r\n  /** References the toolbar instance that the element its associated with. */\r\n  @Input(\"sdsToolbarExpand\")\r\n  get toolbar() {\r\n    return this._toolbar;\r\n  }\r\n  set toolbar(toolbar: SdsToolbarComponent) {\r\n    if (toolbar === this._toolbar) {\r\n      return;\r\n    }\r\n    this._toolbar = toolbar;\r\n    /** Sets toolbar expanded width */\r\n\r\n    this._expandedWidth = this._toolbar.expandedSpace;\r\n  }\r\n  private _toolbar: SdsToolbarComponent;\r\n\r\n  constructor(private renderer: Renderer2, private _element: ElementRef) { }\r\n  ngOnInit() {\r\n    this.setStyle(this.toolbar.expanded);\r\n    this.toolbar.expandedChange.subscribe(value => {\r\n      this.setStyle(value);\r\n    });\r\n  }\r\n\r\n  private setStyle(value: any) {\r\n    if (value) {\r\n      this.renderer.setStyle(this._element.nativeElement, \"margin-left\", `${this._expandedWidth}`);\r\n    }\r\n    else {\r\n      this.renderer.removeStyle(this._element.nativeElement, \"margin-left\");\r\n    }\r\n  }\r\n}\r\n",
            "selector": "[sdsToolbarExpand]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsToolbarExpand",
                    "description": "<p>References the toolbar instance that the element its associated with. </p>\n",
                    "line": 13
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [
                {
                    "name": "_expandedWidth",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Width of the toolbar while expanded. </p>\n",
                    "line": 9
                },
                {
                    "name": "_toolbar",
                    "type": "SdsToolbarComponent",
                    "optional": false,
                    "description": "",
                    "line": 25,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 28
                },
                {
                    "name": "setStyle",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 35,
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "implements": [
                "OnInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "renderer",
                        "type": "Renderer2"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    }
                ],
                "line": 25,
                "jsdoctags": [
                    {
                        "name": "renderer",
                        "type": "Renderer2",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "toolbar": {
                    "name": "toolbar",
                    "setSignature": {
                        "name": "toolbar",
                        "type": "void",
                        "args": [
                            {
                                "name": "toolbar",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 16,
                        "jsdoctags": [
                            {
                                "name": "toolbar",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsTruncateTextByLineDirective",
            "id": "directive-SdsTruncateTextByLineDirective-2a24a89c3f0a1b5ce84cb7b768679d85",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text.directive.ts",
            "type": "directive",
            "description": "",
            "sourceCode": "import {\r\n  Directive,\r\n  ElementRef,\r\n  OnInit,\r\n  Input,\r\n  OnDestroy,\r\n  AfterViewInit,\r\n  HostListener,\r\n  Injector,\r\n  ViewContainerRef\r\n} from '@angular/core';\r\nimport { coerceNumberProperty } from '@angular/cdk/coercion';\r\nimport {\r\n  ViewportRuler,\r\n  OverlayConfig,\r\n  Overlay,\r\n  OverlayRef,\r\n  ConnectedPosition\r\n} from '@angular/cdk/overlay';\r\nimport { Subscription, merge } from 'rxjs';\r\nimport { startWith } from 'rxjs/operators';\r\nimport { PortalInjector, ComponentPortal } from '@angular/cdk/portal';\r\nimport { SdsTruncatedTextContainerComponent } from './truncate-text-container.component';\r\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\r\n\r\n@Directive({ selector: '[sdsTruncateTextByLine]' })\r\nexport class SdsTruncateTextByLineDirective\r\n  implements OnInit, OnDestroy, AfterViewInit {\r\n  /** Maximum lines of text limit */\r\n  @Input('sdsTruncateTextByLine')\r\n  get textLinesLimit(): any {\r\n    return this._textLinesLimit;\r\n  }\r\n  set textLinesLimit(_textLinesLimit: any) {\r\n    _textLinesLimit = coerceNumberProperty(_textLinesLimit);\r\n    if (this._textLinesLimit !== _textLinesLimit) {\r\n      this._textLinesLimit = _textLinesLimit;\r\n    }\r\n  }\r\n  private _textLinesLimit: number;\r\n\r\n  /** PortalOutlet */\r\n  private _overlayRef: OverlayRef | null = null;\r\n\r\n  /** Holds subscription to stream of overlay closing events */\r\n  private _closingActionsSubscription = Subscription.EMPTY;\r\n\r\n  /** Holds initial text */\r\n  private initialText: string;\r\n\r\n  /** Subscription to window resize stream */\r\n  windowResize$: Subscription;\r\n\r\n  /** Approximated character width of the host text */\r\n  private approximatedCharacterWidth: number;\r\n\r\n  constructor(\r\n    private _overlay: Overlay,\r\n    private _injector: Injector,\r\n    private _element: ElementRef,\r\n    private _viewportRuler: ViewportRuler,\r\n    private _viewContainerRef: ViewContainerRef\r\n  ) {}\r\n\r\n  ngOnInit() {\r\n    this.initialText = this._element.nativeElement.innerText.trim();\r\n\r\n    // Clone element to facilitate calculations\r\n    const hostCloneEl = this._element.nativeElement.cloneNode() as HTMLElement;\r\n\r\n    // Add 1 character to calculate character width\r\n    hostCloneEl.innerHTML = 'x';\r\n\r\n    // Render the clone to get character width\r\n    this._element.nativeElement.parentElement.appendChild(hostCloneEl);\r\n\r\n    // Set the clone to inline to prevent cases where the clone\r\n    // expands to 100% width of the container\r\n    hostCloneEl.setAttribute('style', 'display: inline');\r\n\r\n    // These are close approximations that are used to better guess\r\n    // how many characters fit in X number of lines\r\n    this.approximatedCharacterWidth = hostCloneEl.offsetWidth;\r\n\r\n    // Remove clone after calculations\r\n    hostCloneEl.remove();\r\n  }\r\n\r\n  ngAfterViewInit(): void {\r\n    this.windowResize$ = this._viewportRuler\r\n      .change(0)\r\n      .pipe(startWith('Start'))\r\n      .subscribe(() => this.updateUI());\r\n  }\r\n\r\n  ngOnDestroy(): void {\r\n    if (this._overlayRef) {\r\n      this._overlayRef.dispose();\r\n    }\r\n    this._closingActionsSubscription.unsubscribe();\r\n    this.windowResize$.unsubscribe();\r\n  }\r\n\r\n  /** Configures and creates the CDK overlay */\r\n  private _createOverlay() {\r\n    const overlayPositions: ConnectedPosition = {\r\n      originX: 'start',\r\n      originY: 'bottom',\r\n      overlayX: 'start',\r\n      overlayY: 'top'\r\n    };\r\n    const config = new OverlayConfig({\r\n      positionStrategy: this._overlay\r\n        .position()\r\n        .flexibleConnectedTo(this._element)\r\n        .withLockedPosition()\r\n        .withPositions([overlayPositions])\r\n        .withTransformOriginOn('.sds-overlay'),\r\n      hasBackdrop: true,\r\n      backdropClass: 'cdk-overlay-transparent-backdrop',\r\n      scrollStrategy: this._overlay.scrollStrategies.close()\r\n    });\r\n    return this._overlay.create(config);\r\n  }\r\n\r\n  /** Attach a ComponentPortal to the overlay **/\r\n  private _attachContainer(overlay: OverlayRef) {\r\n    const injector = new PortalInjector(\r\n      this._injector,\r\n      new WeakMap([[SDS_TRUNCATED_TEXT_DATA, { text: this.initialText }]])\r\n    );\r\n    const containerPortal = new ComponentPortal(\r\n      SdsTruncatedTextContainerComponent,\r\n      this._viewContainerRef,\r\n      injector\r\n    );\r\n    const containerRef = overlay.attach(containerPortal);\r\n\r\n    return containerRef.instance;\r\n  }\r\n\r\n  /** Returns a stream that emits whenever an action that should close the overlay occurs. */\r\n  private _overlayClosingActions() {\r\n    const backdrop = this._overlayRef.backdropClick();\r\n    const detachments = this._overlayRef.detachments();\r\n    return merge(backdrop, detachments);\r\n  }\r\n\r\n  /** Width of host element */\r\n  private _getHostWidth(): number {\r\n    return this._element.nativeElement.offsetWidth;\r\n  }\r\n\r\n  /** Approximated number of characters that are visible in the container */\r\n  private _getVisibleCharacters(): number {\r\n    return Math.floor(\r\n      (this._getHostWidth() / this.approximatedCharacterWidth) *\r\n        this.textLinesLimit\r\n    );\r\n  }\r\n\r\n  private _isNotLongEnough(): boolean {\r\n    return this._getVisibleCharacters() > this.initialText.length;\r\n  }\r\n\r\n  @HostListener('click')\r\n  openOverlay(): void {\r\n    // Exit if all text can be visible in container\r\n    if (this._isNotLongEnough()) return;\r\n\r\n    this._overlayRef = this._createOverlay();\r\n    const container = this._attachContainer(this._overlayRef);\r\n    this._closingActionsSubscription = this._overlayClosingActions().subscribe(\r\n      () => this.closeOverlay()\r\n    );\r\n    // Wait for the next event loop tick to start the animation\r\n    setTimeout(() => {\r\n      container.startAnimation();\r\n    });\r\n  }\r\n\r\n  updateUI() {\r\n    // Exit if all text can be visible in container\r\n    if (this._isNotLongEnough()) return;\r\n\r\n    const wordCut = false;\r\n    const ellipsis = '...';\r\n    const limit = this._getVisibleCharacters() - ellipsis.length;\r\n\r\n    let visibleText = this.initialText.slice(0, limit);\r\n\r\n    if (!wordCut) {\r\n      const isEndofWord = this.initialText.substr(limit, limit + 1) === ' ';\r\n      if (!isEndofWord) {\r\n        const previousWord = visibleText.lastIndexOf(' ');\r\n        visibleText = visibleText.slice(0, previousWord);\r\n      }\r\n    }\r\n\r\n    this._element.nativeElement.innerText = visibleText + ellipsis;\r\n  }\r\n\r\n  closeOverlay() {\r\n    this._closingActionsSubscription.unsubscribe();\r\n    this._overlayRef.detach();\r\n  }\r\n}\r\n",
            "selector": "[sdsTruncateTextByLine]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "sdsTruncateTextByLine",
                    "description": "<p>Maximum lines of text limit </p>\n",
                    "line": 31,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "click",
                    "args": [],
                    "argsDecorator": [],
                    "line": 167
                }
            ],
            "propertiesClass": [
                {
                    "name": "_closingActionsSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds subscription to stream of overlay closing events </p>\n",
                    "line": 46,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayRef",
                    "defaultValue": "null",
                    "type": "OverlayRef | null",
                    "optional": false,
                    "description": "<p>PortalOutlet </p>\n",
                    "line": 43,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_textLinesLimit",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 40,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "approximatedCharacterWidth",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Approximated character width of the host text </p>\n",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "initialText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Holds initial text </p>\n",
                    "line": 49,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "windowResize$",
                    "type": "Subscription",
                    "optional": false,
                    "description": "<p>Subscription to window resize stream </p>\n",
                    "line": 52
                }
            ],
            "methodsClass": [
                {
                    "name": "_attachContainer",
                    "args": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>Attach a ComponentPortal to the overlay *</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "type": "OverlayRef",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_createOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 105,
                    "description": "<p>Configures and creates the CDK overlay </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getHostWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 150,
                    "description": "<p>Width of host element </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_getVisibleCharacters",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 155,
                    "description": "<p>Approximated number of characters that are visible in the container </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_isNotLongEnough",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 162,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlayClosingActions",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 143,
                    "description": "<p>Returns a stream that emits whenever an action that should close the overlay occurs. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "closeOverlay",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 203
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 89
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 96
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 65
                },
                {
                    "name": "updateUI",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 182
                }
            ],
            "implements": [
                "OnInit",
                "OnDestroy",
                "AfterViewInit"
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_overlay",
                        "type": "Overlay"
                    },
                    {
                        "name": "_injector",
                        "type": "Injector"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_viewportRuler",
                        "type": "ViewportRuler"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    }
                ],
                "line": 55,
                "jsdoctags": [
                    {
                        "name": "_overlay",
                        "type": "Overlay",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_injector",
                        "type": "Injector",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "textLinesLimit": {
                    "name": "textLinesLimit",
                    "setSignature": {
                        "name": "textLinesLimit",
                        "type": "void",
                        "args": [
                            {
                                "name": "_textLinesLimit",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 34,
                        "jsdoctags": [
                            {
                                "name": "_textLinesLimit",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        }
    ],
    "components": [
        {
            "name": "PaginationComponent",
            "id": "component-PaginationComponent-376217450546d75bbed133051bdc7366",
            "file": "libs/packages/components/src/lib/pagination/pagination.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-pagination",
            "styleUrls": [
                "./pagination.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./pagination.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "page",
                    "defaultValue": "new PaginationModel()",
                    "description": "<p>Pagination model</p>\n",
                    "line": 40,
                    "type": "PaginationModel"
                },
                {
                    "name": "paginationConfiguration",
                    "description": "<p>configuration for the pagination</p>\n",
                    "line": 46,
                    "type": "PaginationConfigurationModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "pageChange",
                    "defaultValue": "new EventEmitter<PaginationModel>()",
                    "description": "<p>Output of the page model object</p>\n",
                    "line": 34,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "currentPageField",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>Input field for the current page</p>\n",
                    "line": 28,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'currentPage'"
                        }
                    ]
                },
                {
                    "name": "debounceTime",
                    "defaultValue": "500",
                    "type": "number",
                    "optional": false,
                    "description": "<p>debounce time for current page input</p>\n",
                    "line": 52
                },
                {
                    "name": "options",
                    "defaultValue": "[\r\n    { label: '25', value: 25 },\r\n    { label: '50', value: 50 },\r\n    { label: '100', value: 100 }\r\n  ]",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>Drop down options for page size</p>\n",
                    "line": 67,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "previousNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Stores the previous number</p>\n",
                    "line": 57,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "timeoutNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>timeout id of the debounce time </p>\n",
                    "line": 62
                }
            ],
            "methodsClass": [
                {
                    "name": "currentPageFocusOut",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>current page focus out will replace with previous valid if empty</p>\n"
                },
                {
                    "name": "handleInputOutsideBounds",
                    "args": [
                        {
                            "name": "newValue",
                            "type": "number",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 123,
                    "description": "<p>adjusts the value if not within the page limit above or below</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2952,
                                "end": 2960,
                                "flags": 0,
                                "escapedText": "newValue"
                            },
                            "type": "number",
                            "optional": true,
                            "tagName": {
                                "pos": 2946,
                                "end": 2951,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>handles</p>\n"
                        }
                    ]
                },
                {
                    "name": "maintainPreviousValue",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 21,
                    "description": "<p>Stores the previous number. Used when focus out if field empty</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "nextPage",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 87,
                    "description": "<p>next page increase page number by one within range</p>\n"
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 11
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 148,
                    "description": "<p>page size selection change</p>\n"
                },
                {
                    "name": "previousPage",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "description": "<p>previous page lowers page number by one within range</p>\n"
                },
                {
                    "name": "valuechange",
                    "args": [
                        {
                            "name": "newValue",
                            "type": "number",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 99,
                    "description": "<p>current page changes sets new value if within range</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2214,
                                "end": 2222,
                                "flags": 0,
                                "escapedText": "newValue"
                            },
                            "type": "number",
                            "optional": true,
                            "tagName": {
                                "pos": 2208,
                                "end": 2213,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';\r\nimport { PaginationConfigurationModel, PaginationModel } from './model/paginationModel';\r\n\r\n@Component({\r\n  selector: 'sds-pagination',\r\n  templateUrl: './pagination.component.html',\r\n  styleUrls: ['./pagination.component.scss']\r\n})\r\nexport class PaginationComponent implements OnInit {\r\n\r\n  ngOnInit(): void {\r\n    this.maintainPreviousValue();\r\n  }\r\n\r\n  constructor(private change: ChangeDetectorRef) { }\r\n\r\n\r\n  /**\r\n   * Stores the previous number. Used when focus out if field empty\r\n   */\r\n  private maintainPreviousValue() {\r\n    this.previousNumber = this.page.pageNumber.valueOf();\r\n  }\r\n\r\n  /**\r\n   * Input field for the current page\r\n   */\r\n  @ViewChild('currentPage') currentPageField: ElementRef;\r\n\r\n  /**\r\n   * Output of the page model object\r\n   */\r\n  @Output()\r\n  pageChange = new EventEmitter<PaginationModel>();\r\n\r\n  /**\r\n   * Pagination model\r\n   */\r\n  @Input()\r\n  page: PaginationModel = new PaginationModel();\r\n\r\n  /**\r\n   * configuration for the pagination\r\n   */\r\n  @Input()\r\n  paginationConfiguration: PaginationConfigurationModel;\r\n\r\n\r\n  /**\r\n   * debounce time for current page input\r\n   */\r\n  debounceTime: number = 500;\r\n\r\n  /**\r\n   * Stores the previous number\r\n   */\r\n  private previousNumber: number;\r\n\r\n  /**\r\n   * timeout id of the debounce time \r\n   */\r\n  timeoutNumber: number;\r\n\r\n  /**\r\n   * Drop down options for page size\r\n   */\r\n  public options = [\r\n    { label: '25', value: 25 },\r\n    { label: '50', value: 50 },\r\n    { label: '100', value: 100 }\r\n  ];\r\n\r\n  /**\r\n   * previous page lowers page number by one within range\r\n   */\r\n  previousPage() {\r\n    if (this.page.pageNumber > 1) {\r\n      this.page.pageNumber--;\r\n      this.maintainPreviousValue();\r\n      this.pageChange.emit(this.page);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * next page increase page number by one within range\r\n   */\r\n  nextPage() {\r\n    if (this.page.pageNumber < this.page.totalPages) {\r\n      this.page.pageNumber++;\r\n      this.maintainPreviousValue();\r\n      this.pageChange.emit(this.page);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * current page changes sets new value if within range\r\n   * @param newValue \r\n   */\r\n  valuechange(newValue?: number) {\r\n    window.clearTimeout(this.timeoutNumber);\r\n    this.timeoutNumber = window.setTimeout(() => {\r\n      if (newValue || newValue === 0) {\r\n        newValue = this.handleInputOutsideBounds(newValue);\r\n        if (newValue >= 1 && newValue <= this.page.totalPages) {\r\n          this.page.pageNumber = newValue;\r\n          this.maintainPreviousValue();\r\n          this.pageChange.emit(this.page);\r\n          this.change.detectChanges();\r\n        }\r\n      } else {\r\n\r\n        if (this.page.pageNumber) {\r\n          this.maintainPreviousValue();\r\n        }\r\n      }\r\n    }, this.debounceTime);\r\n  }\r\n\r\n  /**\r\n   * adjusts the value if not within the page limit above or below\r\n   * @param newValue handles\r\n   */\r\n  private handleInputOutsideBounds(newValue?: number) {\r\n    if (newValue < 1) {\r\n      newValue = 1;\r\n      this.currentPageField.nativeElement.value = newValue;\r\n    }\r\n    else if (newValue > this.page.totalPages) {\r\n      newValue = this.page.totalPages;\r\n      this.currentPageField.nativeElement.value = newValue;\r\n    }\r\n    return newValue;\r\n  }\r\n\r\n  /**\r\n   * current page focus out will replace with previous valid if empty\r\n   */\r\n  currentPageFocusOut() {\r\n    if (this.currentPageField.nativeElement.value === '') {\r\n      this.currentPageField.nativeElement.value = this.page.pageNumber = this.previousNumber;\r\n      this.change.detectChanges();\r\n    }\r\n  }\r\n\r\n  /**\r\n   * page size selection change\r\n   */\r\n  onSelectChange() {\r\n    this.page.pageNumber = 1;\r\n    this.pageChange.emit(this.page);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "/* Hide HTML5 Up and Down arrows. */\r\ninput[type=number]::-webkit-inner-spin-button, \r\ninput[type=number]::-webkit-outer-spin-button { \r\n  -webkit-appearance: none; \r\n  margin: 0; \r\n}\r\n \r\ninput[type=\"number\"] {\r\n    -moz-appearance: textfield;\r\n}",
                    "styleUrl": "./pagination.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "change",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 13,
                "jsdoctags": [
                    {
                        "name": "change",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"sds-pagination\">\r\n  <div class=\"sds-pagination__controls\">\r\n    <button [attr.id]=\"paginationConfiguration.id +'-previousPage'\" (click)=\"previousPage()\">Previous Page</button>\r\n    <label class=\"usa-label font-sans-3xs margin-top-1 text-italic text-base usa-sr-only\"\r\n      [attr.for]=\"paginationConfiguration.id + '-currentPage'\">Current Page</label>\r\n    <input [attr.id]=\"paginationConfiguration.id +'-currentPage'\"\r\n      class=\"usa-input height-3 width-4 line-height-05 font-sans-3xs text-center border-base-light\" #currentPage\r\n      (ngModelChange)=\"valuechange($event)\" [(ngModel)]=\"page.pageNumber\" type=\"number\" min=\"1\"\r\n      [(attr.max)]=\"page.totalPages\" (focusout)=\"currentPageFocusOut()\" aria-label=\"current page\" />\r\n    <span class=\"sds-pagination__total\">\r\n      of <strong>{{ page.totalPages }}</strong>\r\n    </span>\r\n    <button [attr.id]=\"paginationConfiguration.id +'-nextPage'\" (click)=\"nextPage()\">Next Page</button>\r\n  </div>\r\n  <div class=\"sds-pagination__results\">\r\n    <label class=\"usa-label font-sans-3xs text-italic text-base\"\r\n      [attr.for]=\"paginationConfiguration.id + '-select'\">Results per page</label>\r\n    <select class=\"usa-select usa-select--small border-base-light\" [attr.id]=\"paginationConfiguration.id + '-select'\"\r\n      (change)=\"onSelectChange()\" [(ngModel)]=\"page.pageSize\">\r\n      <option *ngFor=\"let item of options\" [ngValue]=\"item.value\">\r\n        {{ item.label }}\r\n      </option>\r\n    </select>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsAccordionItemComponent",
            "id": "component-SdsAccordionItemComponent-91e8b2d328fe8e70edabbbb95bd5d95e",
            "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "exportAs": "sdsAccordionItem",
            "host": {},
            "inputs": [
                "disabled",
                "expanded"
            ],
            "outputs": [
                "opened",
                "closed",
                "expandedChange"
            ],
            "providers": [],
            "selector": "sds-accordion-item",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "accordion-item.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [
                {
                    "name": "afterCollapse",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>An event emitted after the body&#39;s collapse animation happens. </p>\n",
                    "line": 61,
                    "type": "EventEmitter"
                },
                {
                    "name": "afterExpand",
                    "defaultValue": "new EventEmitter<void>()",
                    "description": "<p>An event emitted after the body&#39;s expansion animation happens. </p>\n",
                    "line": 58,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_animationMode",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 89,
                    "decorators": [
                        {
                            "name": "Optional",
                            "stringifiedArguments": ""
                        },
                        {
                            "name": "Inject",
                            "stringifiedArguments": "ANIMATION_MODULE_TYPE"
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_body",
                    "type": "ElementRef<HTMLElement>",
                    "optional": false,
                    "description": "<p>Element containing the accordion item&#39;s user-provided content. </p>\n",
                    "line": 73,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'body'"
                        }
                    ]
                },
                {
                    "name": "_bodyAnimationDone",
                    "defaultValue": "new Subject<AnimationEvent>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stream of body animation done events. </p>\n",
                    "line": 82
                },
                {
                    "name": "_document",
                    "type": "Document",
                    "optional": false,
                    "description": "",
                    "line": 55,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_headerId",
                    "defaultValue": "`sds-accordion-item-header-${uniqueId++}`",
                    "type": "",
                    "optional": false,
                    "description": "<p>ID for the associated header element. Used for a11y labelling. </p>\n",
                    "line": 79
                },
                {
                    "name": "_inputChanges",
                    "defaultValue": "new Subject<SimpleChanges>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Stream that emits for changes in <code>@Input</code> properties. </p>\n",
                    "line": 64,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "_lazyContent",
                    "type": "SdsAccordionItemContentDirective",
                    "optional": false,
                    "description": "<p>Content that will be rendered lazily. </p>\n",
                    "line": 70,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "SdsAccordionItemContentDirective"
                        }
                    ]
                },
                {
                    "name": "_portal",
                    "type": "TemplatePortal",
                    "optional": false,
                    "description": "<p>Portal holding the user&#39;s content. </p>\n",
                    "line": 76
                },
                {
                    "name": "accordion",
                    "type": "SdsAccordionBase",
                    "optional": false,
                    "description": "<p>Optionally defined accordion the accordion item belongs to. </p>\n",
                    "line": 67
                }
            ],
            "methodsClass": [
                {
                    "name": "_containsFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 138,
                    "description": "<p>Checks whether the accordion item&#39;s content contains the currently-focused element. </p>\n"
                },
                {
                    "name": "_getExpandedState",
                    "args": [],
                    "optional": false,
                    "returnType": "SdsAccordionItemState",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Gets the expanded state string. </p>\n"
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 114
                },
                {
                    "name": "ngOnChanges",
                    "args": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 127,
                    "jsdoctags": [
                        {
                            "name": "changes",
                            "type": "SimpleChanges",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 131
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {AnimationEvent} from '@angular/animations';\r\nimport { CdkAccordionItem } from \"@angular/cdk/accordion\";\r\nimport {UniqueSelectionDispatcher} from '@angular/cdk/collections';\r\nimport {TemplatePortal} from '@angular/cdk/portal';\r\nimport {\r\n  AfterContentInit,\r\n  ChangeDetectionStrategy,\r\n  ChangeDetectorRef,\r\n  Component,\r\n  ContentChild,\r\n  EventEmitter,\r\n  ElementRef,\r\n  Inject,\r\n  OnChanges,\r\n  OnDestroy,\r\n  Optional,\r\n  Output,\r\n  SimpleChanges,\r\n  SkipSelf,\r\n  ViewContainerRef,\r\n  ViewEncapsulation,\r\n  ViewChild\r\n} from \"@angular/core\";\r\nimport {DOCUMENT} from '@angular/common';\r\nimport {ANIMATION_MODULE_TYPE} from '@angular/platform-browser/animations';\r\nimport {Subject} from 'rxjs';\r\nimport {filter, startWith, take, distinctUntilChanged} from 'rxjs/operators';\r\nimport {sdsExpansionAnimations} from './accordion-animations';\r\nimport {SdsAccordionItemContentDirective} from './accordion-item-content.directive';\r\nimport {SDS_ACCORDION, SdsAccordionBase} from './accordion-base';\r\n\r\n/** Accordion Item's states. */\r\nexport type SdsAccordionItemState = 'expanded' | 'collapsed';\r\n\r\n/** Counter for generating unique element ids. */\r\nlet uniqueId = 0;\r\n\r\n@Component({\r\n  selector: \"sds-accordion-item\",\r\n  exportAs: \"sdsAccordionItem\",\r\n  templateUrl: \"accordion-item.component.html\",\r\n  encapsulation: ViewEncapsulation.None,\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  inputs: ['disabled', 'expanded'],\r\n  outputs: ['opened', 'closed', 'expandedChange'],\r\n  animations: [sdsExpansionAnimations.bodyExpansion],\r\n  host: {\r\n    'class': 'sds-accordion__item',\r\n    '[class.sds-accordion__item--expanded]': 'expanded',\r\n    '[class._sds-animation-noopable]': '_animationMode === \"NoopAnimations\"'\r\n  }\r\n})\r\nexport class SdsAccordionItemComponent extends CdkAccordionItem\r\n  implements AfterContentInit, OnChanges, OnDestroy {\r\n  private _document: Document;\r\n\r\n  /** An event emitted after the body's expansion animation happens. */\r\n  @Output() afterExpand = new EventEmitter<void>();\r\n\r\n  /** An event emitted after the body's collapse animation happens. */\r\n  @Output() afterCollapse = new EventEmitter<void>();\r\n\r\n  /** Stream that emits for changes in `@Input` properties. */\r\n  readonly _inputChanges = new Subject<SimpleChanges>();\r\n\r\n  /** Optionally defined accordion the accordion item belongs to. */\r\n  accordion: SdsAccordionBase;\r\n\r\n  /** Content that will be rendered lazily. */\r\n  @ContentChild(SdsAccordionItemContentDirective) _lazyContent: SdsAccordionItemContentDirective;\r\n\r\n  /** Element containing the accordion item's user-provided content. */\r\n  @ViewChild('body') _body: ElementRef<HTMLElement>;\r\n\r\n  /** Portal holding the user's content. */\r\n  _portal: TemplatePortal;\r\n\r\n  /** ID for the associated header element. Used for a11y labelling. */\r\n  _headerId = `sds-accordion-item-header-${uniqueId++}`;\r\n\r\n  /** Stream of body animation done events. */\r\n  _bodyAnimationDone = new Subject<AnimationEvent>();\r\n\r\n  constructor(@Optional() @SkipSelf() @Inject(SDS_ACCORDION) accordion: SdsAccordionBase,\r\n              _changeDetectorRef: ChangeDetectorRef,\r\n              _uniqueSelectionDispatcher: UniqueSelectionDispatcher,\r\n              private _viewContainerRef: ViewContainerRef,\r\n              @Inject(DOCUMENT) _document: any,\r\n              @Optional() @Inject(ANIMATION_MODULE_TYPE) public _animationMode: string) {\r\n    super(accordion, _changeDetectorRef, _uniqueSelectionDispatcher);\r\n    this.accordion = accordion;\r\n    this._document = _document;\r\n\r\n    // We need a Subject with distinctUntilChanged, because the `done` event\r\n    // fires twice on some browsers. See https://github.com/angular/angular/issues/24084\r\n    this._bodyAnimationDone.pipe(distinctUntilChanged((x, y) => {\r\n      return x.fromState === y.fromState && x.toState === y.toState;\r\n    })).subscribe(event => {\r\n      if (event.fromState !== 'void') {\r\n        if (event.toState === 'expanded') {\r\n          this.afterExpand.emit();\r\n        } else if (event.toState === 'collapsed') {\r\n          this.afterCollapse.emit();\r\n        }\r\n      }\r\n    });\r\n  }\r\n\r\n  /** Gets the expanded state string. */\r\n  _getExpandedState(): SdsAccordionItemState {\r\n    return this.expanded ? 'expanded' : 'collapsed';\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n    if (this._lazyContent) {\r\n      // Render the content as soon as the accordion item becomes open.\r\n      this.opened.pipe(\r\n        startWith(null!),\r\n        filter(() => this.expanded && !this._portal),\r\n        take(1)\r\n      ).subscribe(() => {\r\n        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);\r\n      });\r\n    }\r\n  }\r\n\r\n  ngOnChanges(changes: SimpleChanges) {\r\n    this._inputChanges.next(changes);\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    super.ngOnDestroy();\r\n    this._bodyAnimationDone.complete();\r\n    this._inputChanges.complete();\r\n  }\r\n\r\n  /** Checks whether the accordion item's content contains the currently-focused element. */\r\n  _containsFocus(): boolean {\r\n    if (this._body) {\r\n      const focusedElement = this._document.activeElement;\r\n      const bodyElement = this._body.nativeElement;\r\n      return focusedElement === bodyElement || bodyElement.contains(focusedElement);\r\n    }\r\n\r\n    return false;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "accordion",
                        "type": "SdsAccordionBase"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "_uniqueSelectionDispatcher",
                        "type": "UniqueSelectionDispatcher"
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef"
                    },
                    {
                        "name": "_document",
                        "type": "any"
                    },
                    {
                        "name": "_animationMode",
                        "type": "string"
                    }
                ],
                "line": 82,
                "jsdoctags": [
                    {
                        "name": "accordion",
                        "type": "SdsAccordionBase",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_uniqueSelectionDispatcher",
                        "type": "UniqueSelectionDispatcher",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_viewContainerRef",
                        "type": "ViewContainerRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_document",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_animationMode",
                        "type": "string",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "extends": "CdkAccordionItem",
            "implements": [
                "AfterContentInit",
                "OnChanges",
                "OnDestroy"
            ],
            "templateData": "<ng-content select=\"sds-accordion-item-header\"></ng-content>\r\n<div\r\n  class=\"sam-accordion__panel\"\r\n  role=\"region\"\r\n  [@bodyExpansion]=\"_getExpandedState()\"\r\n  (@bodyExpansion.done)=\"_bodyAnimationDone.next($event)\"\r\n  [attr.aria-labelledby]=\"_headerId\"\r\n  [id]=\"id\"\r\n  #body\r\n>\r\n  <div class=\"sds-accordion__panel-body\">\r\n    <ng-content></ng-content>\r\n    <ng-template [cdkPortalOutlet]=\"_portal\"></ng-template>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsAccordionItemHeaderComponent",
            "id": "component-SdsAccordionItemHeaderComponent-d5ded8019a45c66f49a88a2d7f4683d0",
            "file": "libs/packages/components/src/lib/accordion/accordion-item-header.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-accordion-item-header",
            "styleUrls": [
                "./accordion-item-header.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./accordion-item-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_parentChangeSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "accordionItem",
                    "type": "SdsAccordionItemComponent",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "decorators": [
                        {
                            "name": "Host",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getAccordionItemId",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 80,
                    "description": "<p>Gets the accordion item id. </p>\n"
                },
                {
                    "name": "_isExpanded",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Gets whether the accordion item is expanded. </p>\n"
                },
                {
                    "name": "_keydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 85,
                    "description": "<p>Handle keydown event calling to toggle() if appropriate. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>Toggles the expanded state of the accordion item. </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "\"program\""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 110,
                    "description": "<p>Focuses the item header. Implemented as a part of <code>FocusableOption</code>.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3264,
                                "end": 3270,
                                "flags": 0,
                                "escapedText": "origin"
                            },
                            "type": "FocusOrigin",
                            "defaultValue": "\"program\"",
                            "tagName": {
                                "pos": 3258,
                                "end": 3263,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Origin of the action that triggered the focus.</p>\n"
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 114
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { FocusMonitor, FocusableOption, FocusOrigin } from \"@angular/cdk/a11y\";\r\nimport { ENTER, SPACE, hasModifierKey } from \"@angular/cdk/keycodes\";\r\nimport {\r\n  ChangeDetectionStrategy,\r\n  ChangeDetectorRef,\r\n  Component,\r\n  ElementRef,\r\n  Host,\r\n  OnDestroy,\r\n  ViewEncapsulation\r\n} from \"@angular/core\";\r\nimport { merge, Subscription } from \"rxjs\";\r\nimport { filter } from \"rxjs/operators\";\r\nimport { SdsAccordionItemComponent } from \"./accordion-item.component\";\r\n\r\n@Component({\r\n  selector: \"sds-accordion-item-header\",\r\n  templateUrl: \"./accordion-item-header.component.html\",\r\n  styleUrls:['./accordion-item-header.component.scss'],\r\n  encapsulation: ViewEncapsulation.None,\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  host: {\r\n    class: \"sds-accordion__trigger\",\r\n    role: \"button\",\r\n    \"[attr.id]\": \"accordionItem._headerId\",\r\n    \"[attr.tabindex]\": \"disabled ? -1 : 0\",\r\n    \"[attr.aria-controls]\": \"_getAccordionItemId()\",\r\n    \"[attr.aria-expanded]\": \"_isExpanded()\",\r\n    \"[attr.aria-disabled]\": \"accordionItem.disabled\",\r\n    \"(click)\": \"_toggle()\",\r\n    \"(keydown)\": \"_keydown($event)\"\r\n  }\r\n})\r\nexport class SdsAccordionItemHeaderComponent implements OnDestroy, FocusableOption {\r\n  private _parentChangeSubscription = Subscription.EMPTY;\r\n  constructor(\r\n    @Host() public accordionItem: SdsAccordionItemComponent,\r\n    private _element: ElementRef,\r\n    private _focusMonitor: FocusMonitor,\r\n    private _changeDetectorRef: ChangeDetectorRef\r\n  ) {\r\n\r\n    // Since the toggle state depends on an @Input on the accordion item, we\r\n    // need to subscribe and trigger change detection manually.\r\n    this._parentChangeSubscription = merge(\r\n      accordionItem.opened,\r\n      accordionItem.closed,\r\n      accordionItem._inputChanges.pipe(\r\n        filter(changes => !!(changes[\"disabled\"]))\r\n      )\r\n    ).subscribe(() => this._changeDetectorRef.markForCheck());\r\n\r\n    _focusMonitor.monitor(_element).subscribe(origin => {\r\n      if (origin && accordionItem.accordion) {\r\n        accordionItem.accordion._handleHeaderFocus(this);\r\n      }\r\n    });\r\n\r\n  }\r\n\r\n  /**\r\n   * Whether the associated accordion item is disabled. \r\n   * Implemented as a part of `FocusableOption`.\r\n   */\r\n  get disabled() {\r\n    return this.accordionItem.disabled;\r\n  }\r\n\r\n  /** Toggles the expanded state of the accordion item. */\r\n  _toggle(): void {\r\n    this.accordionItem.toggle();\r\n  }\r\n\r\n  /** Gets whether the accordion item is expanded. */\r\n  _isExpanded(): boolean {\r\n    return this.accordionItem.expanded;\r\n  }\r\n\r\n  /** Gets the accordion item id. */\r\n  _getAccordionItemId(): string {\r\n    return this.accordionItem.id;\r\n  }\r\n\r\n  /** Handle keydown event calling to toggle() if appropriate. */\r\n  _keydown(event: KeyboardEvent) {\r\n    switch (event.keyCode) {\r\n      // Toggle for space and enter keys.\r\n      case SPACE:\r\n      case ENTER:\r\n        if (!hasModifierKey(event)) {\r\n          event.preventDefault();\r\n          this._toggle();\r\n        }\r\n\r\n        break;\r\n      default:\r\n        if (this.accordionItem.accordion) {\r\n          this.accordionItem.accordion._handleHeaderKeydown(event);\r\n        }\r\n\r\n        return;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Focuses the item header. Implemented as a part of `FocusableOption`.\r\n   * @param origin Origin of the action that triggered the focus.\r\n   * @docs-private\r\n   */\r\n  focus(origin: FocusOrigin = \"program\") {\r\n    this._focusMonitor.focusVia(this._element, origin);\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this._parentChangeSubscription.unsubscribe();\r\n    this._focusMonitor.stopMonitoring(this._element);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".sds-accordion__title{\r\n    min-height: 2em;\r\n}\r\n.sds-accordion__trigger-off {\r\n    display: block;\r\n    font-size: 17px;\r\n    font-weight: 600;\r\n    margin: 0;\r\n    padding: 0;\r\n    padding-top: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n    padding-left: 0px;\r\n    position: relative;\r\n    text-align: left;\r\n    width: 100%;\r\n    outline: none !important;\r\n    cursor: pointer;\r\n    border-style: none;\r\n}",
                    "styleUrl": "./accordion-item-header.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "accordionItem",
                        "type": "SdsAccordionItemComponent"
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 35,
                "jsdoctags": [
                    {
                        "name": "accordionItem",
                        "type": "SdsAccordionItemComponent",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_element",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnDestroy",
                "FocusableOption"
            ],
            "accessors": {
                "disabled": {
                    "name": "disabled",
                    "getSignature": {
                        "name": "disabled",
                        "type": "",
                        "returnType": "",
                        "line": 65,
                        "description": "<p>Whether the associated accordion item is disabled. \nImplemented as a part of <code>FocusableOption</code>.</p>\n"
                    }
                }
            },
            "templateData": "<span class=\"sds-accordion__title\">\r\n  <ng-content></ng-content>\r\n  <span class=\"sds-accordion__icon\"></span>\r\n</span>\r\n"
        },
        {
            "name": "SDSAutocompleteComponent",
            "id": "component-SDSAutocompleteComponent-3127ac227ea47b1c4bd4689b786d157d",
            "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "Autocomplete_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-autocomplete",
            "styleUrls": [
                "./autocomplete.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./autocomplete.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the control</p>\n",
                    "line": 58,
                    "type": "SDSAutocompletelConfiguration"
                },
                {
                    "name": "selectedItemTemplate",
                    "description": "<p>Allow to insert a customized template for selected items</p>\n",
                    "line": 30,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n",
                    "line": 64,
                    "type": "SDSAutocompleteServiceInterface"
                },
                {
                    "name": "suggestionTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions results</p>\n",
                    "line": 25,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "disabled",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 51,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 35,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 49,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "isSingleMode",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 84
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 72,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 80,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 66,
                    "jsdoctags": [
                        {
                            "name": "obj",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "focusout",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 42
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef, HostListener } from '@angular/core';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl } from '@angular/forms';\r\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\r\nimport { SDSAutocompleteServiceInterface } from '../autocomplete-search/models/SDSAutocompleteServiceInterface';\r\nimport { SDSAutocompletelConfiguration } from './models/SDSAutocompletelConfiguration.model';\r\nimport { SelectionMode } from '../selected-result/models/sds-selected-item-model-helper';\r\nconst Autocomplete_VALUE_ACCESSOR: any = {\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\r\n  multi: true\r\n};\r\n\r\n@Component({\r\n  selector: 'sds-autocomplete',\r\n  templateUrl: './autocomplete.component.html',\r\n  styleUrls: ['./autocomplete.component.scss'],\r\n  providers: [Autocomplete_VALUE_ACCESSOR]\r\n})\r\nexport class SDSAutocompleteComponent implements ControlValueAccessor {\r\n\r\n\r\n  /**\r\n* Allow to insert a customized template for suggestions results\r\n*/\r\n  @Input() suggestionTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n  * Allow to insert a customized template for selected items\r\n  */\r\n  @Input() selectedItemTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n  * The data model that has the selected item\r\n  */\r\n  public model: SDSSelectedItemModel;\r\n\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  @HostListener('focusout')\r\n  public onTouchedCallback: () => void = () => {\r\n\r\n  };\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public propogateChange: (_: any) => void = (_: any) => null;\r\n\r\n  public disabled: boolean;\r\n\r\n\r\n  /**\r\n * Configuration for the control\r\n */\r\n  @Input()\r\n  public configuration: SDSAutocompletelConfiguration;\r\n\r\n  /**\r\n* Instance of the SamHiercarchicalServiceInterface provided\r\n*/\r\n  @Input()\r\n  public service: SDSAutocompleteServiceInterface;\r\n\r\n  writeValue(obj: any): void {\r\n    if (obj instanceof SDSSelectedItemModel) {\r\n      this.model = obj as SDSSelectedItemModel;\r\n    }\r\n  }\r\n\r\n  registerOnChange(fn: any): void {\r\n    this.propogateChange = fn;\r\n  }\r\n\r\n  registerOnTouched(fn: any): void {\r\n    this.onTouchedCallback = fn;\r\n  }\r\n\r\n  setDisabledState(isDisabled: boolean): void {\r\n    this.disabled = isDisabled;\r\n  }\r\n\r\n  isSingleMode(): boolean {\r\n    if (this.configuration) {\r\n      return this.configuration.selectionMode === SelectionMode.SINGLE;\r\n    }\r\n    else {\r\n      return false;\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./autocomplete.component.scss"
                }
            ],
            "stylesData": "",
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<sds-search-autocomplete [disabled]=\"disabled\" (ngModelChange)=\"propogateChange($event)\" #autocomplete\r\n    [service]=\"service\" [(ngModel)]=\"model\" [configuration]=\"configuration\" [itemTemplate]=\"suggestionTemplate\">\r\n</sds-search-autocomplete>\r\n<sds-selected-result (ngModelChange)=\"propogateChange($event)\" [disabled]=\"disabled\" *ngIf=\"!isSingleMode()\"\r\n    [(ngModel)]=\"model\" [configuration]=\"configuration\" [itemTemplate]=\"selectedItemTemplate\"></sds-selected-result>"
        },
        {
            "name": "SDSAutocompleteSearchComponent",
            "id": "component-SDSAutocompleteSearchComponent-93eb4dcd5297b4bfe5384e4f582e7021",
            "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-search-autocomplete",
            "styleUrls": [
                "./autocomplete-search.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./autocomplete-search.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the Autocomplete control </p>\n",
                    "line": 48,
                    "type": "SDSAutocompleteSearchConfiguration"
                },
                {
                    "name": "disabled",
                    "line": 116,
                    "type": "boolean"
                },
                {
                    "name": "itemTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions to use</p>\n",
                    "line": 37,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "service",
                    "description": "<p>Instance of the SamHiercarchicalServiceInterface provided</p>\n",
                    "line": 54,
                    "type": "SDSAutocompleteServiceInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "highlightedIndex",
                    "defaultValue": "0",
                    "type": "number",
                    "optional": false,
                    "description": "<p>selected index</p>\n",
                    "line": 74,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "highlightedItem",
                    "type": "object",
                    "optional": false,
                    "description": "<p>highlighted object in drop down</p>\n",
                    "line": 79,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "HighlightedPropertyName",
                    "defaultValue": "'highlighted'",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Proprty being set on the object is highlighted</p>\n",
                    "line": 89,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "input",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>input control </p>\n",
                    "line": 31,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'input'"
                        }
                    ]
                },
                {
                    "name": "inputValue",
                    "defaultValue": "''",
                    "type": "string",
                    "optional": false,
                    "description": "<p>value of the input field </p>\n",
                    "line": 84,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "maxResults",
                    "type": "number",
                    "optional": false,
                    "description": "<p>max number of results to be shown</p>\n",
                    "line": 69,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 42,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 108,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 113,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "results",
                    "type": "object[]",
                    "optional": false,
                    "description": "<p>result set to be rendered</p>\n",
                    "line": 64
                },
                {
                    "name": "resultsAvailableMessage",
                    "defaultValue": "' results available. Use up and down arrows\\\r\n  to scroll through results. Hit enter to select.'",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 118,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "resultsListElement",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "<p>Ul list of elements </p>\n",
                    "line": 26,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'resultsList'"
                        }
                    ]
                },
                {
                    "name": "searchString",
                    "defaultValue": "null",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Search string</p>\n",
                    "line": 96,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "showLoad",
                    "defaultValue": "true",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 91,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "showResults",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Determines if the dropdown should be shown</p>\n",
                    "line": 153,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "srOnlyText",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Message announced by screen readers when\nautocomplete results are updated or new item\nis highlighted</p>\n",
                    "line": 103,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "timeoutNumber",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Timer id for the timer awaiting the service call for more typeing</p>\n",
                    "line": 59,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "addResult",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 415,
                    "description": "<p>adds a single item to the list</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12016,
                                "end": 12020,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 12010,
                                "end": 12015,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "addScreenReaderMessage",
                    "args": [
                        {
                            "name": "message",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 459,
                    "description": "<p>Adds message to be read by screen reader</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 13478,
                                "end": 13485,
                                "flags": 0,
                                "escapedText": "message"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 13472,
                                "end": 13477,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "checkForFocus",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 168,
                    "description": "",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4390,
                                "end": 4395,
                                "flags": 0,
                                "escapedText": "event"
                            },
                            "type": "",
                            "tagName": {
                                "pos": 4384,
                                "end": 4389,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "clearAndHideResults",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 264,
                    "description": "<p>clears the results and closes result drop down</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "clearInput",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 158,
                    "description": "<p>Clears the input fields and value</p>\n",
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "createFreeTextItem",
                    "args": [],
                    "optional": false,
                    "returnType": "{ 'type': string; }",
                    "typeParameters": [],
                    "line": 326,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "focusRemoved",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 176,
                    "description": "",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "getAdditionalResults",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 399,
                    "description": "<p>gets more results based when scrolling and adds the items</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "getObjectValue",
                    "args": [
                        {
                            "name": "object",
                            "type": "Object"
                        },
                        {
                            "name": "propertyFields",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 126,
                    "description": "<p>Gets the string value from the specifed properties of an object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3341,
                                "end": 3347,
                                "flags": 0,
                                "escapedText": "object"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 3335,
                                "end": 3340,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 3362,
                                "end": 3376,
                                "flags": 0,
                                "escapedText": "propertyFields"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3356,
                                "end": 3361,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>comma seperated list with periods depth of object</p>\n"
                        }
                    ]
                },
                {
                    "name": "getResults",
                    "args": [
                        {
                            "name": "searchString",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 337,
                    "description": "<p>gets the inital results</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 9235,
                                "end": 9247,
                                "flags": 0,
                                "escapedText": "searchString"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 9229,
                                "end": 9234,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "inputFocusHandler",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 209,
                    "description": "<p>Event method used when focus is gained to the input</p>\n"
                },
                {
                    "name": "listItemHover",
                    "args": [
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 377,
                    "description": "<p>highlights the index being hovered</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 10779,
                                "end": 10784,
                                "flags": 0,
                                "escapedText": "index"
                            },
                            "type": "number",
                            "tagName": {
                                "pos": 10773,
                                "end": 10778,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "matchPastSearchString",
                    "args": [
                        {
                            "name": "searchString",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 369,
                    "description": "<p>Checks if the new search string matches the old search string</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 10585,
                                "end": 10597,
                                "flags": 0,
                                "escapedText": "searchString"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 10579,
                                "end": 10584,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onArrowDown",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 286,
                    "description": "<p>handles the arrow down key event</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onArrowUp",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 273,
                    "description": "<p>handles the arrow up key event</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 220,
                    "description": "<p>Key event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 5763,
                                "end": 5768,
                                "flags": 0,
                                "escapedText": "event"
                            },
                            "type": "",
                            "tagName": {
                                "pos": 5757,
                                "end": 5762,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onScroll",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 385,
                    "description": "<p>Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)</p>\n"
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 477,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 481,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "scrollSelectedItemIntoView",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 423,
                    "description": "<p>When paging up and down with arrow key it sets the highlighted item into view</p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "selectItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 252,
                    "description": "<p>selects the item adding it to the model and closes the results</p>\n",
                    "modifierKind": [
                        114
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 6666,
                                "end": 6670,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 6660,
                                "end": 6665,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 485,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setHighlightedItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "Object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 434,
                    "description": "<p>Sets the highlighted item by keyboard or mouseover</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 12617,
                                "end": 12621,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 12611,
                                "end": 12616,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "showFreeText",
                    "args": [],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 296
                },
                {
                    "name": "textChange",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 195,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 464,
                    "jsdoctags": [
                        {
                            "name": "obj",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, ViewChild, TemplateRef, ElementRef, forwardRef, ChangeDetectorRef } from '@angular/core';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\r\nimport { SDSAutocompleteServiceInterface } from './models/SDSAutocompleteServiceInterface';\r\nimport { KeyHelper, KEYS } from '../key-helper/key-helper';\r\nimport { SDSSelectedItemModel } from '../selected-result/models/sds-selectedItem.model';\r\nimport { SelectionMode, SDSSelectedItemModelHelper } from '../selected-result/models/sds-selected-item-model-helper';\r\nimport { SDSAutocompleteSearchConfiguration } from './models/SDSAutocompleteConfiguration';\r\nconst Autocomplete_Autocomplete_VALUE_ACCESSOR: any = {\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\r\n  multi: true\r\n};\r\n\r\n@Component({\r\n  selector: 'sds-search-autocomplete',\r\n  templateUrl: './autocomplete-search.component.html',\r\n  styleUrls: ['./autocomplete-search.component.scss'],\r\n  providers: [Autocomplete_Autocomplete_VALUE_ACCESSOR]\r\n})\r\nexport class SDSAutocompleteSearchComponent implements ControlValueAccessor {\r\n\r\n  constructor(private _changeDetectorRef: ChangeDetectorRef) { }\r\n  /**\r\n   * Ul list of elements \r\n   */\r\n  @ViewChild('resultsList') resultsListElement: ElementRef;\r\n\r\n  /**\r\n   * input control \r\n   */\r\n  @ViewChild('input') input: ElementRef;\r\n\r\n\r\n  /**\r\n   * Allow to insert a customized template for suggestions to use\r\n   */\r\n  @Input() itemTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * The data model that has the selected item\r\n   */\r\n  public model: SDSSelectedItemModel;\r\n\r\n  /**\r\n   * Configuration for the Autocomplete control \r\n   */\r\n  @Input()\r\n  public configuration: SDSAutocompleteSearchConfiguration;\r\n\r\n  /**\r\n   * Instance of the SamHiercarchicalServiceInterface provided\r\n   */\r\n  @Input()\r\n  public service: SDSAutocompleteServiceInterface;\r\n\r\n  /**\r\n   * Timer id for the timer awaiting the service call for more typeing\r\n   */\r\n  private timeoutNumber: number;\r\n\r\n  /**\r\n   *  result set to be rendered\r\n   */\r\n  results: object[];\r\n\r\n  /**\r\n   * max number of results to be shown\r\n   */\r\n  private maxResults: number;\r\n\r\n  /**\r\n   * selected index\r\n   */\r\n  public highlightedIndex: number = 0;\r\n\r\n  /**\r\n   * highlighted object in drop down\r\n   */\r\n  private highlightedItem: object;\r\n\r\n  /**\r\n   * value of the input field \r\n   */\r\n  public inputValue: string = '';\r\n\r\n  /**\r\n   * Proprty being set on the object is highlighted\r\n   */\r\n  private HighlightedPropertyName = 'highlighted';\r\n\r\n  public showLoad: boolean = true;\r\n\r\n  /**\r\n   * Search string\r\n   */\r\n  private searchString: string = null;\r\n\r\n  /**\r\n   * Message announced by screen readers when\r\n   * autocomplete results are updated or new item\r\n   * is highlighted\r\n   */\r\n  public srOnlyText: string;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public onTouchedCallback: () => void = () => null;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public propogateChange: (_: any) => void = (_: any) => null;\r\n\r\n  @Input()\r\n  public disabled: boolean;\r\n\r\n  private resultsAvailableMessage: string = ' results available. Use up and down arrows\\\r\n  to scroll through results. Hit enter to select.';\r\n\r\n  /**\r\n   * Gets the string value from the specifed properties of an object\r\n   * @param object \r\n   * @param propertyFields comma seperated list with periods depth of object\r\n   */\r\n  getObjectValue(object: Object, propertyFields: string): string {\r\n    let value = '';\r\n    let current = object;\r\n    let fieldSplit = propertyFields.split(',');\r\n    for (let i = 0; i < fieldSplit.length; i++) {\r\n      let fieldValue = fieldSplit[i];\r\n      let fieldPartSplit = fieldValue.split('.');\r\n      for (let j = 0; j < fieldPartSplit.length; j++) {\r\n        let fieldCheckValue = fieldPartSplit[j];\r\n        if (current) {\r\n          current = current[fieldCheckValue];\r\n        }\r\n      }\r\n\r\n      if (current) {\r\n        value += current.toString() + ' ';\r\n      }\r\n      current = object;\r\n    }\r\n    return value.trim();\r\n  }\r\n\r\n\r\n\r\n  /**\r\n   * Determines if the dropdown should be shown\r\n   */\r\n  public showResults = false;\r\n\r\n  /**\r\n   * Clears the input fields and value\r\n   */\r\n  public clearInput(): void {\r\n    this.inputValue = '';\r\n    this.onTouchedCallback();\r\n    this.clearAndHideResults();\r\n  }\r\n\r\n  /**\r\n   * \r\n   * @param event \r\n   */\r\n  checkForFocus(event): void {\r\n    this.focusRemoved();\r\n    this.showResults = false;\r\n  }\r\n\r\n  /**\r\n   * \r\n   */\r\n  private focusRemoved() {\r\n    if (this.configuration) {\r\n      if (this.configuration.selectionMode === SelectionMode.SINGLE) {\r\n        if (this.model.items.length > 0) {\r\n          if (this.inputValue.length === 0) {\r\n            SDSSelectedItemModelHelper.clearItems(this.model.items);\r\n            this.propogateChange(this.model);\r\n          } else {\r\n            this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);\r\n          }\r\n        }\r\n      } else {\r\n        this.inputValue = '';\r\n      }\r\n    } else {\r\n      this.inputValue = '';\r\n    }\r\n  }\r\n\r\n  textChange(event) {\r\n    // ie 11 placeholders will incorrectly trigger input events (known bug)\r\n    // if input isn't active element then don't do anything\r\n    if (event.target != document.activeElement) {\r\n      event.preventDefault();\r\n      return;\r\n    }\r\n    const searchString = event.target.value || '';\r\n    this.getResults(searchString);\r\n  }\r\n\r\n  /**\r\n   * Event method used when focus is gained to the input\r\n   */\r\n  inputFocusHandler(): void {\r\n    if (this.configuration.focusInSearch) {\r\n      this.getResults(this.inputValue || '');\r\n    }\r\n    this.onTouchedCallback();\r\n  }\r\n\r\n  /**\r\n   * Key event\r\n   * @param event \r\n   */\r\n  onKeydown(event): void {\r\n    if (KeyHelper.is(KEYS.TAB, event)) {\r\n      return;\r\n    }\r\n    else if (KeyHelper.is(KEYS.DOWN, event)) {\r\n      this.onArrowDown();\r\n    }\r\n    else if (KeyHelper.is(KEYS.UP, event)) {\r\n      event.preventDefault();\r\n      this.onArrowUp();\r\n    }\r\n    else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex >= 0) {\r\n      this.selectItem(this.highlightedItem);\r\n    }\r\n    else if (KeyHelper.is(KEYS.ENTER, event) && this.highlightedIndex < 0) {\r\n      const item = this.createFreeTextItem();\r\n      this.selectItem(item);\r\n    }\r\n    else if (KeyHelper.is(KEYS.ESC, event)) {\r\n      if (this.showResults) {\r\n        this.clearAndHideResults();\r\n        if (event.stopPropagation) {\r\n          event.stopPropagation();\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * selects the item adding it to the model and closes the results\r\n   * @param item \r\n   */\r\n  public selectItem(item: object): void {\r\n    SDSSelectedItemModelHelper.addItem(item, this.configuration.primaryKeyField, this.configuration.selectionMode, this.model.items);\r\n    this.propogateChange(this.model);\r\n    let message = this.getObjectValue(item, this.configuration.primaryTextField);\r\n    this.inputValue = message;\r\n    this.focusRemoved();\r\n    this.showResults = false;\r\n  }\r\n\r\n  /**\r\n   *  clears the results and closes result drop down\r\n   */\r\n  private clearAndHideResults(): void {\r\n    this.results = [];\r\n    this.showResults = false;\r\n    this.focusRemoved();\r\n  }\r\n\r\n  /**\r\n   *  handles the arrow up key event\r\n   */\r\n  private onArrowUp(): void {\r\n    if (this.results && this.results.length > 0) {\r\n      if (this.highlightedIndex >= 0) {\r\n        this.highlightedIndex--;\r\n        this.setHighlightedItem(this.results[this.highlightedIndex]);\r\n        this.scrollSelectedItemIntoView();\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   *  handles the arrow down key event\r\n   */\r\n  private onArrowDown(): void {\r\n    if (this.results && this.results.length > 0) {\r\n      if (this.highlightedIndex < this.results.length - 1) {\r\n        this.highlightedIndex++;\r\n        this.setHighlightedItem(this.results[this.highlightedIndex]);\r\n        this.scrollSelectedItemIntoView();\r\n      }\r\n    }\r\n  }\r\n\r\n  showFreeText() {\r\n    if (this.configuration.isFreeTextEnabled) {\r\n      if (this.inputValue) {\r\n        if (this.inputValue.length !== 0) {\r\n          let foundItem = false;\r\n          if (this.results) {\r\n            for (var i = 0; i < this.results.length && !foundItem; i++) {\r\n              let item = this.results[i];\r\n              foundItem = item[this.configuration.primaryTextField] === this.inputValue;\r\n            }\r\n          }\r\n          if (this.model.items.length > 0 && !foundItem) {\r\n            for (var i = 0; i < this.model.items.length && !foundItem; i++) {\r\n              let item = this.model.items[i];\r\n              foundItem = item[this.configuration.primaryTextField] === this.inputValue;\r\n            }\r\n          }\r\n\r\n          return !foundItem;\r\n        } else {\r\n          return false;\r\n        }\r\n      } else {\r\n        return false;\r\n      }\r\n    } else {\r\n      return this.configuration.isFreeTextEnabled;\r\n    }\r\n  }\r\n\r\n  private createFreeTextItem() {\r\n    let item = { 'type': 'custom' };\r\n    item[this.configuration.primaryTextField] = this.inputValue;\r\n    item[this.configuration.primaryKeyField] = this.inputValue;\r\n    return item;\r\n  }\r\n\r\n  /**\r\n   *  gets the inital results\r\n   * @param searchString \r\n   */\r\n  private getResults(searchString: string): void {\r\n    if (searchString.length >= this.configuration.minimumCharacterCountSearch) {\r\n      if (!this.matchPastSearchString(searchString) ||\r\n        (this.matchPastSearchString(searchString) && !this.showResults)\r\n        || this.matchPastSearchString('')) {\r\n        this.searchString = searchString;\r\n        window.clearTimeout(this.timeoutNumber);\r\n        this.timeoutNumber = window.setTimeout(() => {\r\n          this.showLoad = true;\r\n          this.service.getDataByText(0, searchString).subscribe(\r\n            (result) => {\r\n              this.results = result.items;\r\n              this.showLoad = false;\r\n              this.maxResults = result.totalItems;\r\n\r\n              this.highlightedIndex = this.configuration.isFreeTextEnabled ? -1 : 0;\r\n              if (!this.configuration.isFreeTextEnabled) {\r\n                this.setHighlightedItem(this.results[this.highlightedIndex]);\r\n              }\r\n              this.showResults = true;\r\n              this.addScreenReaderMessage(this.maxResults + ' ' + this.resultsAvailableMessage);\r\n              this._changeDetectorRef.markForCheck();\r\n            });\r\n        }, this.configuration.debounceTime);\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Checks if the new search string matches the old search string\r\n   * @param searchString \r\n   */\r\n  private matchPastSearchString(searchString: string) {\r\n    return this.searchString === searchString;\r\n  }\r\n\r\n  /**\r\n   * highlights the index being hovered\r\n   * @param index \r\n   */\r\n  listItemHover(index: number): void {\r\n    this.highlightedIndex = index;\r\n    this.setHighlightedItem(this.results[this.highlightedIndex]);\r\n  }\r\n\r\n  /**\r\n   * Scroll Event Handler (Calculates if mpre items should be asked for from service on scrolling down)\r\n   */\r\n  onScroll() {\r\n    if (this.maxResults > this.results.length) {\r\n      let scrollAreaHeight = this.resultsListElement.nativeElement.offsetHeight;\r\n      let scrollTopPos = this.resultsListElement.nativeElement.scrollTop;\r\n      let scrollAreaMaxHeight = this.resultsListElement.nativeElement.scrollHeight;\r\n      if ((scrollTopPos + scrollAreaHeight * 2) >= scrollAreaMaxHeight) {\r\n        this.getAdditionalResults();\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * gets more results based when scrolling and adds the items\r\n   */\r\n  private getAdditionalResults() {\r\n    this.showLoad = true;\r\n    this.service.getDataByText(this.results.length, this.searchString).subscribe(\r\n      (result) => {\r\n        for (let i = 0; i < result.items.length; i++) {\r\n          this.addResult(result.items[i]);\r\n        }\r\n        this.showLoad = false;\r\n        this.maxResults = result.totalItems;\r\n      });\r\n  }\r\n\r\n  /**\r\n   * adds a single item to the list\r\n   * @param item \r\n   */\r\n  private addResult(item: object) {\r\n    //add check to make sure item does not exist\r\n    this.results.push(item);\r\n  }\r\n\r\n  /**\r\n   * When paging up and down with arrow key it sets the highlighted item into view\r\n   */\r\n  private scrollSelectedItemIntoView() {\r\n    if (this.highlightedIndex >= 0) {\r\n      const selectedChild = this.resultsListElement.nativeElement.children[this.highlightedIndex];\r\n      selectedChild.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Sets the highlighted item by keyboard or mouseover\r\n   * @param item \r\n   */\r\n  private setHighlightedItem(item: Object): void {\r\n    if (this.results && this.results.length > 0) {\r\n      if (this.highlightedItem) {\r\n        this.highlightedItem[this.HighlightedPropertyName] = false;\r\n      }\r\n      let message = '';\r\n      if (item) {\r\n        this.highlightedItem = item;\r\n        this.highlightedItem[this.HighlightedPropertyName] = true;\r\n        message = item[this.configuration.primaryTextField];\r\n        if (this.configuration.secondaryTextField && item[this.configuration.secondaryTextField]) {\r\n          message += ': ' + item[this.configuration.secondaryTextField];\r\n        }\r\n      } else {\r\n        this.highlightedItem = undefined;\r\n        message = 'No item selected';\r\n      }\r\n      this.addScreenReaderMessage(message);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Adds message to be read by screen reader\r\n   * @param message \r\n   */\r\n  private addScreenReaderMessage(message: string) {\r\n    this.srOnlyText = message;\r\n  }\r\n\r\n\r\n  writeValue(obj: any): void {\r\n    if (obj instanceof SDSSelectedItemModel) {\r\n      this.model = obj as SDSSelectedItemModel;\r\n      if (this.model.items.length === 0) {\r\n        this.inputValue = '';\r\n      } else {\r\n        if (this.configuration.selectionMode === SelectionMode.SINGLE) {\r\n          this.inputValue = this.getObjectValue(this.model.items[0], this.configuration.primaryTextField);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  registerOnChange(fn: any): void {\r\n    this.propogateChange = fn;\r\n  }\r\n\r\n  registerOnTouched(fn: any): void {\r\n    this.onTouchedCallback = fn;\r\n  }\r\n\r\n  setDisabledState(isDisabled: boolean): void {\r\n    this.disabled = isDisabled;\r\n  }\r\n}",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\r\n.grayToLightBackgroundGradiate{\r\n    background: linear-gradient(to right,#C4C4C4, #F7F7F7);\r\n    background-size: 400% 400%;\r\n    height: 10px;\r\n    padding: 2.5px 0 2.5px 0;\r\n    text-align:center;\r\n    color:#888888;\r\n    font-size:15px;\r\n    font-weight:bold;\r\n    margin: 7px 10px 0 10px;\r\n\r\n    -webkit-animation: gradiantShiftGray 5s ease infinite ;\r\n    -moz-animation: gradiantShiftGray 5s ease infinite  ;\r\n    animation: gradiantShiftGray 5s ease infinite;\r\n\r\n    @-webkit-keyframes gradiantShiftGray {\r\n        0%{background-position:0% 50%}\r\n        50%{background-position:100% 50%}\r\n        100%{background-position:0% 50%}\r\n    }\r\n    @-moz-keyframes gradiantShiftGray {\r\n        0%{background-position:0% 50%}\r\n        50%{background-position:100% 50%}\r\n        100%{background-position:0% 50%}\r\n    }\r\n    @keyframes gradiantShiftGray { \r\n        0%{background-position:0% 50%}\r\n        50%{background-position:100% 50%}\r\n        100%{background-position:0% 50%}\r\n    }\r\n}\r\n\r\n.lightToGrayBackgroundGradiate{\r\n\r\n    background: linear-gradient(to right,#F7F7F7,#C4C4C4);\r\n    background-size: 400% 400%;\r\n    height: 15px;\r\n    padding: 2.5px 0 2.5px 0;\r\n    text-align:center;\r\n    color:#888888;\r\n    font-size:15px;\r\n    font-weight:bold;\r\n    margin: 10px 10px 0 10px;\r\n\r\n    -webkit-animation: gradiantShift 5s ease infinite ;\r\n    -moz-animation: gradiantShift 5s ease infinite  ;\r\n    animation: gradiantShift 5s ease infinite;\r\n\r\n    @-webkit-keyframes gradiantShift {\r\n        0%{background-position:0% 50%}\r\n        50%{background-position:100% 50%}\r\n        100%{background-position:0% 50%}\r\n    }\r\n    @-moz-keyframes gradiantShift {\r\n        0%{background-position:0% 50%}\r\n        50%{background-position:100% 50%}\r\n        100%{background-position:0% 50%}\r\n    }\r\n    @keyframes gradiantShift { \r\n        0%{background-position:0% 50%}\r\n        50%{background-position:100% 50%}\r\n        100%{background-position:0% 50%}\r\n    }\r\n}\r\n\r\n.autoLoading{\r\n    height: 60px;\r\n}\r\n",
                    "styleUrl": "./autocomplete-search.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    }
                ],
                "line": 20,
                "jsdoctags": [
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<div sds-click-outside (clickOutside)=\"checkForFocus($event)\" sds-tab-outside (tabOutside)=\"checkForFocus($event)\">\r\n  <div class=\"maxw-mobile-lg position-relative\">\r\n    <div role=\"combobox\" [attr.id]=\"configuration.id+'-container'\" [attr.aria-expanded]=\"showResults\"\r\n      [attr.aria-owns]=\"showResults? configuration.id+ '-listbox' : undefined\" aria-haspopup=\"listbox\">\r\n      <input [disabled]=\"disabled\" (input)=\"textChange($event)\" class=\"usa-input padding-right-3\" #input  [attr.aria-label]=\"configuration.ariaLabelText\"\r\n        [attr.id]=\"configuration.id\" type=\"text\" (focus)=\"inputFocusHandler()\" (keydown)=\"onKeydown($event)\"\r\n        [(ngModel)]=\"inputValue\" aria-autocomplete=\"list\" [attr.placeholder]=\"configuration.autocompletePlaceHolderText\"\r\n        [attr.aria-activedescendant]=\"showResults? configuration.id+'-resultItem-'+highlightedIndex :''\"\r\n        [attr.aria-controls]=\"showResults? configuration.id+ '-listbox' : undefined\"\r\n        autocomplete=\"off\">\r\n    </div>\r\n    <ul #resultsList *ngIf=\"showResults\" [attr.id]=\"configuration.id+ '-listbox'\" role=\"listbox\"\r\n      class=\"usa-list usa-list--unstyled sds-autocomplete\" (scroll)=\"onScroll()\">\r\n      <ng-container *ngIf=\"(results && results.length > 0)\">\r\n        <li [attr.id]=\"configuration.id+'-resultItem-'+i\" role=\"option\" *ngFor=\"let result of results; let i = index\"\r\n          (mouseenter)=\"listItemHover(i)\"\r\n          [class]=\"result['highlighted'] ? 'sds-autocomplete__item sds-autocomplete__item--selected' : 'sds-autocomplete__item' \"\r\n          (click)=\"selectItem(result)\">\r\n          <ng-container *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\"\r\n            [ngTemplateOutletContext]=\"{$implicit:result}\">\r\n\r\n          </ng-container>\r\n\r\n          <ng-container *ngIf=\"!itemTemplate\">\r\n            <span class=\"display-block text-semibold\">\r\n              {{ getObjectValue(result, configuration.primaryTextField) }}\r\n              <span *ngIf=\"result.type === 'custom'\">\r\n                - {{configuration.freeTextSubtext}}\r\n              </span>\r\n            </span>\r\n            <ng-container *ngIf=\"configuration.secondaryTextField &&  result[configuration.secondaryTextField] \">\r\n              <span class=\"description\">{{ result[configuration.secondaryTextField] }}</span>\r\n            </ng-container>\r\n          </ng-container>\r\n        </li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"(!results || results.length == 0)\">\r\n        <li class=\"emptyResults\">No results found</li>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"showLoad\">\r\n        <li class=\"autoLoading\">\r\n          <div class=\"lightToGrayBackgroundGradiate\">\r\n\r\n          </div>\r\n          <div class=\"grayToLightBackgroundGradiate\">\r\n\r\n          </div>\r\n        </li>\r\n        <li class=\"autoLoading\">\r\n          <div class=\"lightToGrayBackgroundGradiate\">\r\n\r\n          </div>\r\n          <div class=\"grayToLightBackgroundGradiate\">\r\n\r\n          </div>\r\n        </li>\r\n      </ng-container>\r\n    </ul>\r\n\r\n    <ng-container *ngIf=\"!input.disabled\">\r\n      <span class=\"position-absolute right-105 top-1\">\r\n        <span tabindex=\"0\" role=\"button\" aria-label=\"Clear input\" aria-hidden=\"false\" (click)=\"clearInput()\"\r\n          (keyup.enter)=\"clearInput()\">\r\n          <fa-icon [icon]=\"['fas', 'times']\" size=\"xs\"></fa-icon>\r\n        </span>\r\n      </span>\r\n    </ng-container>\r\n    <ul class=\"usa-sr-only\" aria-live=\"assertive\">\r\n      <li>{{srOnlyText}}</li>\r\n    </ul>\r\n  </div>\r\n"
        },
        {
            "name": "SdsDialogContainerComponent",
            "id": "component-SdsDialogContainerComponent-3e043467419dfe1d46b2faf98434442f",
            "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
            "changeDetection": "ChangeDetectionStrategy.Default",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-dialog-container",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "dialog-container.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_animationStateChanged",
                    "defaultValue": "new EventEmitter<AnimationEvent>()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Emits when an animation state changes. </p>\n",
                    "line": 81
                },
                {
                    "name": "_ariaLabelledBy",
                    "defaultValue": "null",
                    "type": "string | null",
                    "optional": false,
                    "description": "<p>ID of the element that should be considered as the dialog&#39;s label. </p>\n",
                    "line": 84
                },
                {
                    "name": "_config",
                    "type": "SdsDialogConfig",
                    "optional": false,
                    "description": "<p>The dialog configuration. </p>\n",
                    "line": 95,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "_elementFocusedBeforeDialogWasOpened",
                    "defaultValue": "null",
                    "type": "HTMLElement | null",
                    "optional": false,
                    "description": "<p>Element that was focused before the dialog was opened. Save this to restore upon close. </p>\n",
                    "line": 75,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_focusTrap",
                    "type": "FocusTrap",
                    "optional": false,
                    "description": "<p>The class that traps and manages focus within the dialog. </p>\n",
                    "line": 72,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_id",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the container DOM element. </p>\n",
                    "line": 87
                },
                {
                    "name": "_portalOutlet",
                    "type": "CdkPortalOutlet",
                    "optional": false,
                    "description": "<p>The portal outlet inside of this container into which the dialog content will be loaded. </p>\n",
                    "line": 69,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "CdkPortalOutlet"
                        }
                    ]
                },
                {
                    "name": "_state",
                    "defaultValue": "'enter'",
                    "type": "\"void\" | \"enter\" | \"exit\"",
                    "optional": false,
                    "description": "<p>State of the dialog animation. </p>\n",
                    "line": 78
                }
            ],
            "methodsClass": [
                {
                    "name": "_onAnimationDone",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170,
                    "description": "<p>Callback, invoked whenever an animation on the host completes. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationStart",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 181,
                    "description": "<p>Callback, invoked when an animation on the host starts. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_restoreFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 141,
                    "description": "<p>Restores focus to the element that was focused before the dialog opened. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_savePreviouslyFocusedElement",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 155,
                    "description": "<p>Saves a reference to the element that was focused before the dialog was opened. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_startExitAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 186,
                    "description": "<p>Starts the dialog exit animation. </p>\n"
                },
                {
                    "name": "_trapFocus",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 127,
                    "description": "<p>Moves the focus inside the focus trap. </p>\n",
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "attachComponentPortal",
                    "args": [
                        {
                            "name": "portal",
                            "type": "ComponentPortal<T>"
                        }
                    ],
                    "optional": false,
                    "returnType": "ComponentRef<T>",
                    "typeParameters": [
                        "T"
                    ],
                    "line": 104,
                    "description": "<p>Attach a ComponentPortal as content to this dialog container.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3556,
                                "end": 3562,
                                "flags": 0,
                                "escapedText": "portal"
                            },
                            "type": "ComponentPortal<T>",
                            "tagName": {
                                "pos": 3550,
                                "end": 3555,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Portal to be attached as the dialog content.</p>\n"
                        }
                    ]
                },
                {
                    "name": "attachTemplatePortal",
                    "args": [
                        {
                            "name": "portal",
                            "type": "TemplatePortal<C>"
                        }
                    ],
                    "optional": false,
                    "returnType": "EmbeddedViewRef<C>",
                    "typeParameters": [
                        "C"
                    ],
                    "line": 117,
                    "description": "<p>Attach a TemplatePortal as content to this dialog container.</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3995,
                                "end": 4001,
                                "flags": 0,
                                "escapedText": "portal"
                            },
                            "type": "TemplatePortal<C>",
                            "tagName": {
                                "pos": 3989,
                                "end": 3994,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Portal to be attached as the dialog content.</p>\n"
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "<p>Internal component that wraps user-provided dialog content.</p>\n",
            "rawdescription": "Internal component that wraps user-provided dialog content.",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ComponentRef,\r\n  ElementRef,\r\n  EmbeddedViewRef,\r\n  EventEmitter,\r\n  Inject,\r\n  Optional,\r\n  ChangeDetectorRef,\r\n  ViewChild,\r\n  ViewEncapsulation,\r\n  ChangeDetectionStrategy,\r\n} from '@angular/core';\r\nimport {DOCUMENT} from '@angular/common';\r\nimport {AnimationEvent} from '@angular/animations';\r\nimport {sdsDialogAnimations} from './dialog-animations';\r\nimport {\r\n  BasePortalOutlet,\r\n  ComponentPortal,\r\n  CdkPortalOutlet,\r\n  TemplatePortal\r\n} from '@angular/cdk/portal';\r\nimport {FocusTrap, FocusTrapFactory} from '@angular/cdk/a11y';\r\nimport {SdsDialogConfig} from './dialog-config';\r\n\r\n\r\n/**\r\n * Throws an exception for the case when a ComponentPortal is\r\n * attached to a DomPortalOutlet without an origin.\r\n * @docs-private\r\n */\r\nexport function throwSdsDialogContentAlreadyAttachedError() {\r\n  throw Error('Attempting to attach dialog content after content is already attached');\r\n}\r\n\r\n/**\r\n * Internal component that wraps user-provided dialog content.\r\n * @docs-private\r\n */\r\n@Component({\r\n  selector: 'sds-dialog-container',\r\n  templateUrl: 'dialog-container.component.html',\r\n  encapsulation: ViewEncapsulation.None,\r\n  // Using OnPush for dialogs caused some G3 sync issues. Disabled until we can track them down.\r\n  // tslint:disable-next-line:validate-decorators\r\n  changeDetection: ChangeDetectionStrategy.Default,\r\n  animations: [sdsDialogAnimations.dialogContainer],\r\n  // tslint:disable-next-line: use-host-property-decorator\r\n  host: {\r\n    'class': 'sds-dialog__container',\r\n    '[class.sds-dialog--alert]': '_config.alert',\r\n    '[class.sds-dialog--alert-error]':'_config.alert === \"error\"',\r\n    '[class.sds-dialog--alert-warning]':'_config.alert === \"warning\"',\r\n    '[class.sds-dialog--alert-info]':'_config.alert === \"info\"',\r\n    'tabindex': '-1',\r\n    'aria-modal': 'true',\r\n    '[attr.id]': '_id',\r\n    '[attr.role]': '_config.role',\r\n    '[attr.aria-labelledby]': '_config.ariaLabel ? null : _ariaLabelledBy',\r\n    '[attr.aria-label]': '_config.ariaLabel',\r\n    '[attr.aria-describedby]': '_config.ariaDescribedBy || null',\r\n    '[@dialogContainer]': '_state',\r\n    '(@dialogContainer.start)': '_onAnimationStart($event)',\r\n    '(@dialogContainer.done)': '_onAnimationDone($event)',\r\n  },\r\n})\r\nexport class SdsDialogContainerComponent extends BasePortalOutlet {\r\n  /** The portal outlet inside of this container into which the dialog content will be loaded. */\r\n  @ViewChild(CdkPortalOutlet) _portalOutlet: CdkPortalOutlet;\r\n\r\n  /** The class that traps and manages focus within the dialog. */\r\n  private _focusTrap: FocusTrap;\r\n\r\n  /** Element that was focused before the dialog was opened. Save this to restore upon close. */\r\n  private _elementFocusedBeforeDialogWasOpened: HTMLElement | null = null;\r\n\r\n  /** State of the dialog animation. */\r\n  _state: 'void' | 'enter' | 'exit' = 'enter';\r\n\r\n  /** Emits when an animation state changes. */\r\n  _animationStateChanged = new EventEmitter<AnimationEvent>();\r\n\r\n  /** ID of the element that should be considered as the dialog's label. */\r\n  _ariaLabelledBy: string | null = null;\r\n\r\n  /** ID for the container DOM element. */\r\n  _id: string;\r\n\r\n  constructor(\r\n    private _elementRef: ElementRef,\r\n    private _focusTrapFactory: FocusTrapFactory,\r\n    private _changeDetectorRef: ChangeDetectorRef,\r\n    @Optional() @Inject(DOCUMENT) private _document: any,\r\n    /** The dialog configuration. */\r\n    public _config: SdsDialogConfig) {\r\n\r\n    super();\r\n  }\r\n\r\n  /**\r\n   * Attach a ComponentPortal as content to this dialog container.\r\n   * @param portal Portal to be attached as the dialog content.\r\n   */\r\n  attachComponentPortal<T>(portal: ComponentPortal<T>): ComponentRef<T> {\r\n    if (this._portalOutlet.hasAttached()) {\r\n      throwSdsDialogContentAlreadyAttachedError();\r\n    }\r\n\r\n    this._savePreviouslyFocusedElement();\r\n    return this._portalOutlet.attachComponentPortal(portal);\r\n  }\r\n\r\n  /**\r\n   * Attach a TemplatePortal as content to this dialog container.\r\n   * @param portal Portal to be attached as the dialog content.\r\n   */\r\n  attachTemplatePortal<C>(portal: TemplatePortal<C>): EmbeddedViewRef<C> {\r\n    if (this._portalOutlet.hasAttached()) {\r\n      throwSdsDialogContentAlreadyAttachedError();\r\n    }\r\n\r\n    this._savePreviouslyFocusedElement();\r\n    return this._portalOutlet.attachTemplatePortal(portal);\r\n  }\r\n\r\n  /** Moves the focus inside the focus trap. */\r\n  private _trapFocus() {\r\n    if (!this._focusTrap) {\r\n      this._focusTrap = this._focusTrapFactory.create(this._elementRef.nativeElement);\r\n    }\r\n\r\n    // If were to attempt to focus immediately, then the content of the dialog would not yet be\r\n    // ready in instances where change detection has to run first. To deal with this, we simply\r\n    // wait for the microtask queue to be empty.\r\n    if (this._config.autoFocus) {\r\n      this._focusTrap.focusInitialElementWhenReady();\r\n    }\r\n  }\r\n\r\n  /** Restores focus to the element that was focused before the dialog opened. */\r\n  private _restoreFocus() {\r\n    const toFocus = this._elementFocusedBeforeDialogWasOpened;\r\n\r\n    // We need the extra check, because IE can set the `activeElement` to null in some cases.\r\n    if (this._config.restoreFocus && toFocus && typeof toFocus.focus === 'function') {\r\n      toFocus.focus();\r\n    }\r\n\r\n    if (this._focusTrap) {\r\n      this._focusTrap.destroy();\r\n    }\r\n  }\r\n\r\n  /** Saves a reference to the element that was focused before the dialog was opened. */\r\n  private _savePreviouslyFocusedElement() {\r\n    if (this._document) {\r\n      this._elementFocusedBeforeDialogWasOpened = this._document.activeElement as HTMLElement;\r\n\r\n      // Note that there is no focus method when rendering on the server.\r\n      if (this._elementRef.nativeElement.focus) {\r\n        // Move focus onto the dialog immediately in order to prevent the user from accidentally\r\n        // opening multiple dialogs at the same time. Needs to be async, because the element\r\n        // may not be focusable immediately.\r\n        Promise.resolve().then(() => this._elementRef.nativeElement.focus());\r\n      }\r\n    }\r\n  }\r\n\r\n  /** Callback, invoked whenever an animation on the host completes. */\r\n  _onAnimationDone(event: AnimationEvent) {\r\n    if (event.toState === 'enter') {\r\n      this._trapFocus();\r\n    } else if (event.toState === 'exit') {\r\n      this._restoreFocus();\r\n    }\r\n\r\n    this._animationStateChanged.emit(event);\r\n  }\r\n\r\n  /** Callback, invoked when an animation on the host starts. */\r\n  _onAnimationStart(event: AnimationEvent) {\r\n    this._animationStateChanged.emit(event);\r\n  }\r\n\r\n  /** Starts the dialog exit animation. */\r\n  _startExitAnimation(): void {\r\n    this._state = 'exit';\r\n\r\n    // Mark the container for check so it can react if the\r\n    // view container is using OnPush change detection.\r\n    this._changeDetectorRef.markForCheck();\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "jsdoctags": [
                {
                    "pos": 993,
                    "end": 998,
                    "flags": 0,
                    "kind": 288,
                    "atToken": {
                        "pos": 993,
                        "end": 994,
                        "flags": 0,
                        "kind": 57
                    },
                    "tagName": {
                        "pos": 994,
                        "end": 998,
                        "flags": 0,
                        "escapedText": "docs"
                    },
                    "comment": "-private"
                }
            ],
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef"
                    },
                    {
                        "name": "_focusTrapFactory",
                        "type": "FocusTrapFactory"
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef"
                    },
                    {
                        "name": "_document",
                        "type": "any"
                    },
                    {
                        "name": "_config",
                        "type": "SdsDialogConfig"
                    }
                ],
                "line": 87,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusTrapFactory",
                        "type": "FocusTrapFactory",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_changeDetectorRef",
                        "type": "ChangeDetectorRef",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_document",
                        "type": "any",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_config",
                        "type": "SdsDialogConfig",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "extends": "BasePortalOutlet",
            "templateData": "<button sds-dialog-close class=\"close-btn\">\r\n  <fa-icon [icon]=\"['fas', 'times']\"></fa-icon>\r\n</button>\r\n\r\n<!-- Alert Icons -->\r\n<div *ngIf=\"_config.alert\" [ngSwitch]=\"_config.alert\" class=\"sds-dialog-icon\">\r\n  <fa-icon *ngSwitchCase=\"'error'\" [icon]=\"['fas', 'ban']\" size=\"3x\"></fa-icon>\r\n  <fa-icon\r\n    *ngSwitchCase=\"'warning'\"\r\n    [icon]=\"['fas', 'exclamation-triangle']\"\r\n    size=\"3x\"\r\n  ></fa-icon>\r\n  <fa-icon\r\n    *ngSwitchCase=\"'info'\"\r\n    [icon]=\"['fas', 'info-circle']\"\r\n    size=\"3x\"\r\n  ></fa-icon>\r\n  <div *ngSwitchDefault>\r\n    Alert <em>{{ _config.alert }}</em> is not valid\r\n  </div>\r\n</div>\r\n\r\n<ng-template cdkPortalOutlet></ng-template>\r\n"
        },
        {
            "name": "SdsFooterComponent",
            "id": "component-SdsFooterComponent-3af7ed1dc3ea73425a72a9ab3396bd61",
            "file": "libs/packages/components/src/lib/footer/footer.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-footer",
            "styleUrls": [
                "./footer.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./footer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "isCollapsedContent",
                    "defaultValue": "true",
                    "line": 22,
                    "type": "boolean"
                },
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the footer</p>\n",
                    "line": 21,
                    "type": "FooterModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 28,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 16
                }
            ],
            "methodsClass": [
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 34,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 900,
                                "end": 904,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 894,
                                "end": 899,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\r\nimport { FooterModel } from './model/FooterModel';\r\nimport { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';\r\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\r\n\r\n@Component({\r\n  selector: 'sds-footer',\r\n  templateUrl: './footer.component.html',\r\n  styleUrls: ['./footer.component.scss']\r\n})\r\nexport class SdsFooterComponent {\r\n\r\n  /**\r\n   * Navigation helper\r\n   */\r\n  navigationHelper = new NavigationHelper();\r\n\r\n  /**\r\n   * Model used for the different display portions of the footer\r\n   */\r\n  @Input() model: FooterModel;\r\n  @Input() isCollapsedContent: boolean = true;\r\n\r\n  /**\r\n   * event for event based\r\n   */\r\n  @Output()\r\n  linkEvent = new EventEmitter<INavigationLink>();\r\n\r\n  /**\r\n   * Link clicked and emits the link data into an event\r\n   * @param link\r\n   */\r\n  linkClickEvent(link: INavigationLink) {\r\n    this.linkEvent.emit(link);\r\n    return false;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\r\n",
                    "styleUrl": "./footer.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<footer class=\"usa-footer usa-footer--big\" role=\"contentinfo\">\r\n\r\n  <div class=\"sds-feedback\">\r\n    <button type=\"button\" class=\"sds-feedback__button\" [attr.aria-expanded]=\"!isCollapsedContent\" aria-controls=\"collapseID\" (click)=\"isCollapsedContent = !isCollapsedContent\">\r\n      <fa-layers [fixedWidth]=\"true\" size=\"2x\">\r\n        <fa-icon [icon]=\"['fas', 'circle']\" [sdsCollapse]=\"isCollapsedContent\" class=\"text-base-light margin-auto\"></fa-icon>\r\n        <fa-icon [icon]=\"['sds', 'arrow-up']\" [sdsCollapse]=\"isCollapsedContent\" transform=\"shrink-6\"></fa-icon>\r\n        <fa-icon [icon]=\"['fas', 'circle']\" [sdsCollapse]=\"!isCollapsedContent\" class=\"text-primary margin-auto\"></fa-icon>\r\n        <fa-icon [icon]=\"['sds', 'arrow-down']\" [sdsCollapse]=\"!isCollapsedContent\" transform=\"shrink-6\"></fa-icon>\r\n      </fa-layers>\r\n      <span class=\"sds-feedback__title\">Feedback</span>\r\n    </button>\r\n    <div id=\"collapseID\" [sdsCollapse]=\"isCollapsedContent\" class=\"sds-feedback__response\">\r\n      <div class=\"tablet:width-tablet-lg padding-4 margin-auto\">\r\n        <span class=\"sds-feedback__response-title\">One Question </span>\r\n        <span class=\"sds-feedback__response-title-thin\"> Survey</span>\r\n        <p class=\"sds-feedback__response-text\">What changes or improvements would you suggest?</p>\r\n        <input class=\"sds-feedback__input\" type=\"text\">\r\n        <button class=\"usa-button usa-button--secondary margin-y-2 float-right\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"usa-footer__primary-section\">\r\n    <div class=\"grid-container\">\r\n      <div class=\"grid-row grid-gap\">\r\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-4\">\r\n          <div\r\n            class=\"usa-footer__logo grid-row mobile-lg:grid-gap-1 margin-top-3\"\r\n          >\r\n            <div\r\n              class=\"mobile-lg:grid-col-3 mobile-lg:grid-offset-3 tablet:grid-offset-none tablet:grid-col-auto\"\r\n            >\r\n              <img\r\n                *ngIf=\"model.footerLogo\"\r\n                class=\"usa-footer__logo-img\"\r\n                [attr.src]=\"model.footerLogo.imageSourcePath\"\r\n                [attr.alt]=\"model.footerLogo.imageAltText\"\r\n              />\r\n              <a\r\n                *ngIf=\"!model.footerLogo\"\r\n                class=\"usa-footer__logo-text\"\r\n                target=\"_blank\"\r\n                href=\"http://gsa.gov\"\r\n              >\r\n                GSA.gov\r\n              </a>\r\n            </div>\r\n            <div class=\"mobile-lg:grid-col-4 tablet:grid-col-auto\">\r\n              <span class=\"usa-footer__logo-heading\">\r\n                {{\r\n                  model.footerLogo?.text || 'General Services Administration'\r\n                }}\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mobile-lg:grid-col-12 tablet:grid-col-8\">\r\n          <nav class=\"usa-footer__nav\">\r\n            <div class=\"grid-row grid-gap-4\">\r\n              <div\r\n                class=\"mobile-lg:grid-col-12 desktop:grid-col-4\"\r\n                *ngFor=\"let section of model.linkSections\"\r\n              >\r\n                <section\r\n                  class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\"\r\n                >\r\n                  <span class=\"usa-footer__primary-link\">{{\r\n                    section.text\r\n                  }}</span>\r\n                  <ul class=\"usa-list usa-list--unstyled\">\r\n                    <li\r\n                      class=\"usa-footer__secondary-link\"\r\n                      *ngFor=\"let link of section.links\"\r\n                    >\r\n                      <ng-container\r\n                        [ngTemplateOutlet]=\"\r\n                          navigationHelper.isLinkInternal(link)\r\n                            ? footerRouteLinkTemplate\r\n                            : navigationHelper.isLinkExternal(link)\r\n                            ? footerHREFLinkTemplate\r\n                            : footerEVENTLinkTemplate\r\n                        \"\r\n                        [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n                      ></ng-container>\r\n                    </li>\r\n                  </ul>\r\n                </section>\r\n              </div>\r\n            </div>\r\n          </nav>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"usa-footer__secondary-section\">\r\n    <div class=\"grid-container\">\r\n      <div class=\"grid-row\">\r\n        <div class=\"grid-col-12\">\r\n          <p class=\"font-body-2xs line-height-sans-4 margin-top-0\">\r\n            This is a U.S. General Services Administration Federal Government\r\n            computer system that is\r\n            <strong>\"FOR OFFICIAL USE ONLY.\"</strong> This system is subject to\r\n            monitoring. Individuals found performing unauthorized activities are\r\n            subject to disciplinary action including criminal prosecution.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n\r\n<ng-template #footerRouteLinkTemplate let-link>\r\n  <a [routerLink]=\"[link.route]\">{{ link.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #footerHREFLinkTemplate let-link>\r\n  <a [attr.href]=\"[link.route]\">{{ link.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #footerEVENTLinkTemplate let-link>\r\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\r\n    link.text\r\n  }}</a>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsHeaderComponent",
            "id": "component-SdsHeaderComponent-9788b8573cd4036cbc4c5f16475f9c17",
            "file": "libs/packages/components/src/lib/header/header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-header",
            "styleUrls": [
                "./header.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the header</p>\n",
                    "line": 28,
                    "type": "HeaderModel"
                },
                {
                    "name": "showTopBanner",
                    "defaultValue": "true",
                    "description": "<p>determines if the top banner is shown</p>\n",
                    "line": 23,
                    "type": "boolean"
                },
                {
                    "name": "topBannerDescription",
                    "defaultValue": "''",
                    "line": 30,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 144,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "closeNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 13,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'usaNavClose'"
                        }
                    ]
                },
                {
                    "name": "mobileNavActive",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 14
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 18
                },
                {
                    "name": "openNavBtn",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'usaNavOpen'"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "closeMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 172
                },
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 71,
                    "description": "<p>Deselects all the items in the header model</p>\n"
                },
                {
                    "name": "find",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 98,
                    "description": "<p>Finds the navigation element by id in the header model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2660,
                                "end": 2662,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2654,
                                "end": 2659,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>of the navigation item</p>\n"
                        }
                    ]
                },
                {
                    "name": "findNavigationLinks",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable"
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 122,
                    "description": "<p>Searchs the items in the navigation links</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3289,
                                "end": 3291,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 3283,
                                "end": 3288,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "hasCounter",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 42,
                    "description": "<p>seeif any secondary link has a counter</p>\n"
                },
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 150,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4016,
                                "end": 4020,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 4010,
                                "end": 4015,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "navAnimationEnd",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183
                },
                {
                    "name": "openMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 168
                },
                {
                    "name": "removeWhiteSpace",
                    "args": [
                        {
                            "name": "text",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 35,
                    "description": "<p>Takes in a text string and removes all white space characters and returns the new string</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1153,
                                "end": 1157,
                                "flags": 0,
                                "escapedText": "text"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1147,
                                "end": 1152,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "select",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 60,
                    "description": "<p>Deselects previous seletion</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1697,
                                "end": 1699,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 1691,
                                "end": 1696,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "window:resize",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "line": 159
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, HostListener } from '@angular/core';\r\nimport { HeaderModel, HeaderNavigationLink, HeaderSecondaryLink } from './model/HeaderModel';\r\nimport { INavigationLink, NavigationMode, Selectable } from '../common-navigation/common-navigation-model';\r\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\r\n@Component({\r\n  selector: 'sds-header',\r\n  templateUrl: './header.component.html',\r\n  styleUrls: ['./header.component.scss']\r\n})\r\nexport class SdsHeaderComponent {\r\n\r\n  @ViewChild('usaNavOpen') openNavBtn: ElementRef;\r\n  @ViewChild('usaNavClose') closeNavBtn: ElementRef;\r\n  mobileNavActive = false;\r\n  /**\r\n  * Navigation helper\r\n  */\r\n  navigationHelper = new NavigationHelper();\r\n\r\n  /**\r\n   * determines if the top banner is shown\r\n   */\r\n  @Input() showTopBanner: boolean = true;\r\n\r\n  /**\r\n   * Model used for the different display portions of the header\r\n   */\r\n  @Input() model: HeaderModel;\r\n\r\n  @Input() topBannerDescription: string = '';\r\n  /**\r\n   * Takes in a text string and removes all white space characters and returns the new string\r\n   * @param text\r\n   */\r\n  removeWhiteSpace(text: string) {\r\n    return text.replace(/ /g, '');\r\n  }\r\n\r\n  /**\r\n   * seeif any secondary link has a counter\r\n   */\r\n  hasCounter(): boolean {\r\n    let hasCounter = false;\r\n    if (this.model) {\r\n      if (this.model.secondaryLinks) {\r\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\r\n          if (item.hasCounter) {\r\n            hasCounter = true;\r\n          }\r\n        });\r\n      }\r\n    }\r\n    return hasCounter;\r\n  }\r\n\r\n  /**\r\n   * Deselects previous seletion\r\n   * @param id\r\n   */\r\n  select(id: string) {\r\n    this.deselect();\r\n    let item = this.find(id);\r\n    if (item) {\r\n      item.selected = true;\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Deselects all the items in the header model\r\n   */\r\n  deselect() {\r\n    if (this.model) {\r\n      if (this.model.home) {\r\n        this.model.home.selected = false;\r\n      }\r\n      if (this.model.navigationLinks) {\r\n        this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\r\n          item.selected = false;\r\n          if (item.children) {\r\n            item.children.forEach(function (child: HeaderNavigationLink) {\r\n              child.selected = false;\r\n            });\r\n          }\r\n        });\r\n      }\r\n      if (this.model.secondaryLinks) {\r\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\r\n          item.selected = false;\r\n        });\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Finds the navigation element by id in the header model\r\n   * @param id of the navigation item\r\n   */\r\n  find(id: string): Selectable {\r\n    let toReturn = null;\r\n    if (this.model) {\r\n      if (this.model.home) {\r\n        if (this.model.home.id === id) {\r\n          toReturn = this.model.home;\r\n        }\r\n      }\r\n      toReturn = this.findNavigationLinks(id, toReturn);\r\n      if (this.model.secondaryLinks) {\r\n        this.model.secondaryLinks.forEach(function (item: HeaderSecondaryLink) {\r\n          if (item.id === id) {\r\n            toReturn = item;\r\n          }\r\n        });\r\n      }\r\n    }\r\n    return toReturn;\r\n  }\r\n\r\n  /**\r\n   * Searchs the items in the navigation links\r\n   * @param id\r\n   */\r\n  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {\r\n    if (this.model.navigationLinks) {\r\n      this.model.navigationLinks.forEach(function (item: HeaderNavigationLink) {\r\n        if (item.id === id) {\r\n          toReturn = item;\r\n        }\r\n        if (item.children) {\r\n          item.children.forEach(function (child: HeaderNavigationLink) {\r\n            if (child.id === id) {\r\n              toReturn = child;\r\n            }\r\n          });\r\n        }\r\n      });\r\n    }\r\n    return toReturn;\r\n  }\r\n\r\n  /**\r\n   * event for event based\r\n   */\r\n  @Output()\r\n  linkEvent = new EventEmitter<INavigationLink>();\r\n\r\n  /**\r\n   * Link clicked and emits the link data into an event\r\n   * @param link\r\n   */\r\n  linkClickEvent(link: INavigationLink) {\r\n    this.linkEvent.emit(link);\r\n    return false;\r\n  }\r\n\r\n  // When the mobile nav is active, and the close box isn't visible,\r\n  // we know the user's viewport has been resized to be larger.\r\n  // Let's make the page state consistent by deactivating the mobile nav.\r\n  @HostListener('window:resize', ['$event'])\r\n  onBrowserResize(event) {\r\n    if (\r\n      this.mobileNavActive &&\r\n      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0\r\n    ) {\r\n      this.mobileNavActive = false;\r\n    }\r\n  }\r\n\r\n  openMobileNav() {\r\n    this.mobileNavActive = true;\r\n  }\r\n\r\n  closeMobileNav() {\r\n    this.mobileNavActive = false;\r\n    // The mobile nav was just deactivated, and focus was on the close\r\n    // button, which is no longer visible. We don't want the focus to\r\n    // disappear into the void, so focus on the menu button if it's\r\n    // visible (this may have been what the user was just focused on,\r\n    // if they triggered the mobile nav by mistake).\r\n    this.openNavBtn.nativeElement.focus();\r\n  }\r\n\r\n  // The mobile nav was just activated, so focus on the close button,\r\n  navAnimationEnd() {\r\n    this.closeNavBtn.nativeElement.focus();\r\n  }\r\n\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./header.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<sds-top-banner *ngIf=\"showTopBanner\" \r\n[description]=\"topBannerDescription\"\r\n></sds-top-banner>\r\n<div\r\n  class=\"usa-overlay\"\r\n  [class.is-visible]=\"mobileNavActive\"\r\n  (click)=\"closeMobileNav()\"\r\n></div>\r\n<header class=\"usa-header usa-header--extended\">\r\n  <div class=\"usa-navbar\">\r\n    <div class=\"usa-logo\" id=\"extended-logo\">\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"\r\n          navigationHelper.isLinkInternal(model.home)\r\n            ? homeLinkRouteTemplate\r\n            : homeLinkHREFTemplate\r\n        \"\r\n        [ngTemplateOutletContext]=\"{ $implicit: model.home }\"\r\n      ></ng-container>\r\n    </div>\r\n    <button #usaNavOpen class=\"usa-menu-btn\" (click)=\"openMobileNav()\">\r\n      <fa-layers [fixedWidth]=\"true\" size=\"3x\">\r\n        <fa-icon\r\n          [icon]=\"['fas', 'square']\"\r\n          [classes]=\"['text-primary']\"\r\n        ></fa-icon>\r\n        <fa-icon\r\n          [icon]=\"['sds', 'bars']\"\r\n          [classes]=\"['icon-bars']\"\r\n          transform=\"shrink-6\"\r\n        ></fa-icon>\r\n        <fa-layers-counter\r\n          *ngIf=\"hasCounter()\"\r\n          [classes]=\"['icon-layers-counter']\"\r\n        ></fa-layers-counter>\r\n      </fa-layers>\r\n      <span class=\"usa-sr-only\">Menu</span>\r\n    </button>\r\n  </div>\r\n  <nav\r\n    aria-label=\"Primary navigation\"\r\n    class=\"usa-nav\"\r\n    (keydown.esc)=\"closeMobileNav()\"\r\n    (animationend)=\"navAnimationEnd()\"\r\n    [class.is-visible]=\"mobileNavActive\"\r\n    [cdkTrapFocus]=\"mobileNavActive\"\r\n  >\r\n    <div class=\"usa-nav__inner\">\r\n      <button #usaNavClose class=\"usa-nav__close\" (click)=\"closeMobileNav()\">\r\n        <fa-layers [fixedWidth]=\"true\" size=\"lg\">\r\n          <fa-icon\r\n            [icon]=\"['fas', 'circle']\"\r\n            [inverse]=\"true\"\r\n            transform=\"grow-2\"\r\n          ></fa-icon>\r\n          <fa-icon [icon]=\"['fas', 'times']\" transform=\"shrink-6\"></fa-icon>\r\n        </fa-layers>\r\n        <span class=\"usa-sr-only\">Close</span>\r\n      </button>\r\n      <ul class=\"usa-nav__primary usa-accordion\">\r\n        <li\r\n          *ngFor=\"let link of model.navigationLinks\"\r\n          class=\"usa-nav__primary-item\"\r\n        >\r\n          <ng-container\r\n            [ngTemplateOutlet]=\"link.route ? linkTemplate : dropDownTemplate\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n          ></ng-container>\r\n        </li>\r\n      </ul>\r\n      <div class=\"usa-nav__secondary\">\r\n        <ul class=\"usa-nav__secondary-links\">\r\n          <li\r\n            *ngFor=\"let link of model.secondaryLinks\"\r\n            class=\"usa-nav__secondary-item\"\r\n          >\r\n            <ng-container\r\n              [ngTemplateOutlet]=\"\r\n                navigationHelper.isLinkInternal(link)\r\n                  ? secondaryRouteLinkTemplate\r\n                  : navigationHelper.isLinkExternal(link)\r\n                  ? secondaryHREFLinkTemplate\r\n                  : secondaryEVENTLinkTemplate\r\n              \"\r\n              [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n            ></ng-container>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n<ng-template #homeLinkRouteTemplate let-home>\r\n  <a [routerLink]=\"home.route\" title=\"Home\" aria-label=\"Home\">\r\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #homeLinkHREFTemplate let-home>\r\n  <a [attr.href]=\"home.route\" title=\"Home\" aria-label=\"Home\">\r\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #secondaryRouteLinkTemplate let-link>\r\n  <a\r\n    [attr.id]=\"link.id\"\r\n    [routerLink]=\"[link.route]\"\r\n    [attr.class]=\"link.selected ? 'usa-current' : ''\"\r\n  >\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"iconLinkTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n    >\r\n    </ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #secondaryHREFLinkTemplate let-link>\r\n  <a\r\n    [attr.id]=\"link.id\"\r\n    [attr.href]=\"[link.route]\"\r\n    [attr.class]=\"link.selected ? 'usa-current' : ''\"\r\n  >\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"iconLinkTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n    >\r\n    </ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #secondaryEVENTLinkTemplate let-link>\r\n  <a\r\n    [attr.id]=\"link.id\"\r\n    (click)=\"linkClickEvent(link)\"\r\n    href=\"javascript:void(0)\"\r\n    [attr.class]=\"link.selected ? 'usa-current' : ''\"\r\n  >\r\n    <ng-container\r\n      [ngTemplateOutlet]=\"iconLinkTemplate\"\r\n      [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n    >\r\n    </ng-container>\r\n  </a>\r\n</ng-template>\r\n\r\n<ng-template #iconLinkTemplate let-link>\r\n  <fa-layers [fixedWidth]=\"true\">\r\n    <fa-icon [icon]=\"[link.imageClassPrefix, link.imageClass]\"></fa-icon>\r\n    <fa-layers-counter\r\n      *ngIf=\"link.hasCounter\"\r\n      [classes]=\"['icon-layers-counter']\"\r\n    ></fa-layers-counter>\r\n  </fa-layers>\r\n  <span class=\"sds-nav__secondary-item-text\">{{ link.text }}</span>\r\n</ng-template>\r\n\r\n<ng-template #linkTemplate let-link>\r\n  <ng-container\r\n    [ngTemplateOutlet]=\"\r\n      navigationHelper.isLinkInternal(link)\r\n        ? linkRouteTemplate\r\n        : navigationHelper.isLinkExternal(link)\r\n        ? linkHREFTemplate\r\n        : linkEventTemplate\r\n    \"\r\n    [ngTemplateOutletContext]=\"{ $implicit: link }\"\r\n  ></ng-container>\r\n</ng-template>\r\n\r\n<ng-template #linkRouteTemplate let-link>\r\n  <a\r\n    [attr.id]=\"link.id\"\r\n    [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\r\n    [routerLink]=\"[link.route]\"\r\n    ><span>{{ link.text }}</span></a\r\n  >\r\n</ng-template>\r\n\r\n<ng-template #linkHREFTemplate let-link>\r\n  <a\r\n    [attr.id]=\"link.id\"\r\n    [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\r\n    [attr.href]=\"[link.route]\"\r\n    ><span>{{ link.text }}</span></a\r\n  >\r\n</ng-template>\r\n\r\n<ng-template #linkEventTemplate let-link>\r\n  <a\r\n    [attr.id]=\"link.id\"\r\n    [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\r\n    href=\"javascript:void(0)\"\r\n    (click)=\"linkClickEvent(link)\"\r\n    ><span>{{ link.text }}</span></a\r\n  >\r\n</ng-template>\r\n\r\n<ng-template #dropDownTemplate let-link>\r\n  <button\r\n    [attr.id]=\"link.id\"\r\n    [attr.class]=\"\r\n      link.selected\r\n        ? 'usa-accordion__button usa-nav__link usa-current'\r\n        : 'usa-accordion__button usa-nav__link'\r\n    \"\r\n    aria-expanded=\"false\"\r\n    [attr.aria-controls]=\"removeWhiteSpace(link.text) + '-section'\"\r\n  >\r\n    <span>{{ link.text }}</span>\r\n  </button>\r\n  <ul\r\n    [attr.id]=\"removeWhiteSpace(link.text) + '-section'\"\r\n    class=\"usa-nav__submenu\"\r\n    hidden\r\n  >\r\n    <li *ngFor=\"let childLink of link.children\" class=\"usa-nav__submenu-item\">\r\n      <ng-container\r\n        [ngTemplateOutlet]=\"\r\n          navigationHelper.isLinkInternal(childLink)\r\n            ? dropDownRouteLinkTemplate\r\n            : navigationHelper.isLinkExternal(childLink)\r\n            ? dropDownHREFLinkTemplate\r\n            : dropDownEVENTLinkTemplate\r\n        \"\r\n        [ngTemplateOutletContext]=\"{ $implicit: childLink }\"\r\n      ></ng-container>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n<ng-template #dropDownRouteLinkTemplate let-childLink>\r\n  <a [routerLink]=\"[childLink.route]\">{{ childLink.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #dropDownHREFLinkTemplate let-childLink>\r\n  <a [attr.href]=\"[childLink.route]\">{{ childLink.text }}</a>\r\n</ng-template>\r\n\r\n<ng-template #dropDownEVENTLinkTemplate let-childLink>\r\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(childLink)\">{{\r\n    childLink.text\r\n  }}</a>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsMenuComponent",
            "id": "component-SdsMenuComponent-7d2664220b4195c4461326237a57e000",
            "file": "libs/packages/components/src/lib/menu/menu.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "exportAs": "sdsMenu",
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{ provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }",
                    "type": "component"
                }
            ],
            "selector": "sds-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "class",
                    "description": "<p>Transfer classes from the sds-menu to the overlay container </p>\n",
                    "line": 143,
                    "type": "string"
                },
                {
                    "name": "overlapTrigger",
                    "description": "<p>Whether menu panel overlaps trigger element </p>\n",
                    "line": 133,
                    "type": "boolean"
                },
                {
                    "name": "size",
                    "description": "<p>Size of menu component.\nAffects the font-size of the menu items and\nthe size of the close button in the menu header</p>\n",
                    "line": 109,
                    "type": "MenuSizes"
                },
                {
                    "name": "xPosition",
                    "description": "<p>Position of the menu in the X axis. </p>\n",
                    "line": 113,
                    "type": "MenuPositionX"
                },
                {
                    "name": "yPosition",
                    "description": "<p>Position of the menu in the Y axis. </p>\n",
                    "line": 123,
                    "type": "MenuPositionY"
                }
            ],
            "outputsClass": [
                {
                    "name": "closed",
                    "defaultValue": "new EventEmitter<void | 'click' | 'keydown' | 'tab'>()",
                    "description": "<p>Event emitted when the menu is closed. </p>\n",
                    "line": 166,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_classList",
                    "defaultValue": "{}",
                    "type": "literal type",
                    "optional": false,
                    "description": "<p>Config object to be passed into the menu&#39;s ngClass </p>\n",
                    "line": 96
                },
                {
                    "name": "_items",
                    "defaultValue": "[]",
                    "type": "SdsMenuItemComponent[]",
                    "optional": false,
                    "description": "<p>Menu items inside the current menu. </p>\n",
                    "line": 87,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_keyManager",
                    "type": "FocusKeyManager<SdsMenuItemComponent>",
                    "optional": false,
                    "description": "<p>Manage browser focus </p>\n",
                    "line": 84,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_overlapTrigger",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 139,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_panelAnimationState",
                    "defaultValue": "'void'",
                    "type": "\"void\" | \"enter\"",
                    "optional": false,
                    "description": "<p>Current state of the panel animation. </p>\n",
                    "line": 99
                },
                {
                    "name": "_previousPanelClass",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Stores <sds-menu> classes </p>\n",
                    "line": 93,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_tabSubscription",
                    "defaultValue": "Subscription.EMPTY",
                    "type": "",
                    "optional": false,
                    "description": "<p>Subscription to tab events on the menu panel </p>\n",
                    "line": 90,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_xPosition",
                    "defaultValue": "'after'",
                    "type": "MenuPositionX",
                    "optional": false,
                    "description": "<p>After | Before the menu triger element </p>\n",
                    "line": 78,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_yPosition",
                    "defaultValue": "'below'",
                    "type": "MenuPositionY",
                    "optional": false,
                    "description": "<p>Above | Below the menu triger element </p>\n",
                    "line": 81,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "templateRef",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Grab the component template </p>\n",
                    "line": 102,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "TemplateRef"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_handleKeydown",
                    "args": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 228,
                    "description": "<p>Handle a keyboard event from the menu </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "KeyboardEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationDone",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 261,
                    "description": "<p>Callback that is invoked when the panel animation completes. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_onAnimationStart",
                    "args": [
                        {
                            "name": "event",
                            "type": "AnimationEvent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 268,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "AnimationEvent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "_resetAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 264,
                    "description": "<p>Resets the panel animation to its initial state. </p>\n"
                },
                {
                    "name": "_startAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 256,
                    "description": "<p>Starts the enter animation. </p>\n"
                },
                {
                    "name": "addItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 206,
                    "description": "<p>Adds a menu item with the menu. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "focusFirstItem",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 189,
                    "description": "<p>Focus the first item in the menu </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "insertItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        },
                        {
                            "name": "index",
                            "type": "number"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 213,
                    "description": "<p>Inserts a menu item at an index </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "index",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngAfterContentInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 174
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 183
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 170
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 220,
                    "description": "<p>Removes an item from the menu. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "SdsMenuItemComponent",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "setPositionClasses",
                    "args": [
                        {
                            "name": "posX",
                            "type": "MenuPositionX",
                            "defaultValue": "this.xPosition"
                        },
                        {
                            "name": "posY",
                            "type": "MenuPositionY",
                            "defaultValue": "this.yPosition"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 194,
                    "description": "<p>Adds classes to the menu panel based on its position </p>\n",
                    "jsdoctags": [
                        {
                            "name": "posX",
                            "type": "MenuPositionX",
                            "defaultValue": "this.xPosition",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "posY",
                            "type": "MenuPositionY",
                            "defaultValue": "this.yPosition",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  AfterContentInit,\r\n  ChangeDetectionStrategy,\r\n  Component,\r\n  ElementRef,\r\n  EventEmitter,\r\n  InjectionToken,\r\n  Input,\r\n  OnDestroy,\r\n  Output,\r\n  TemplateRef,\r\n  ViewChild,\r\n  ViewEncapsulation,\r\n  OnInit\r\n} from '@angular/core';\r\nimport { AnimationEvent } from '@angular/animations';\r\nimport {\r\n  ESCAPE,\r\n  DOWN_ARROW,\r\n  UP_ARROW,\r\n  HOME,\r\n  END,\r\n  hasModifierKey\r\n} from '@angular/cdk/keycodes';\r\nimport { FocusKeyManager, FocusOrigin } from '@angular/cdk/a11y';\r\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\r\nimport { Subscription } from 'rxjs';\r\nimport { sdsMenuAnimations } from './menu-animations';\r\nimport { SdsMenuItemComponent } from './menu-item.component';\r\n\r\n/** Menu Positions */\r\nexport type MenuPositionX = 'before' | 'after';\r\nexport type MenuPositionY = 'above' | 'below';\r\n\r\n/** Menu available sizes */\r\n// sm = 'small'\r\nexport type MenuSizes = 'sm';\r\n\r\n/** Injection token used to provide the parent menu to menu items. */\r\nexport const SDS_MENU_TOKEN = new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n);\r\n\r\n/** Menu Interface */\r\nexport interface SdsMenuInterface<T = any> {\r\n  xPosition: MenuPositionX;\r\n  yPosition: MenuPositionY;\r\n  overlapTrigger: boolean;\r\n  templateRef: TemplateRef<any>;\r\n  closed: EventEmitter<void | 'click' | 'keydown' | 'tab'>;\r\n  parentMenu?: SdsMenuInterface;\r\n  size?: MenuSizes;\r\n  focusFirstItem: (origin?: FocusOrigin) => void;\r\n  setPositionClasses?: (x: MenuPositionX, y: MenuPositionY) => void;\r\n  addItem?: (item: T) => void;\r\n  insertItem?: (item: T, index: number) => void;\r\n  removeItem?: (item: T) => void;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-menu',\r\n  exportAs: 'sdsMenu',\r\n  templateUrl: 'menu.component.html',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  encapsulation: ViewEncapsulation.None,\r\n  animations: [sdsMenuAnimations.transformMenu],\r\n  providers: [\r\n    { provide: SDS_MENU_TOKEN, useExisting: SdsMenuComponent }\r\n  ]\r\n})\r\nexport class SdsMenuComponent\r\n  implements\r\n    OnInit,\r\n    AfterContentInit,\r\n    OnDestroy,\r\n    SdsMenuInterface<SdsMenuItemComponent> {\r\n  /** After | Before the menu triger element */\r\n  private _xPosition: MenuPositionX = 'after';\r\n\r\n  /** Above | Below the menu triger element */\r\n  private _yPosition: MenuPositionY = 'below';\r\n\r\n  /** Manage browser focus */\r\n  private _keyManager: FocusKeyManager<SdsMenuItemComponent>;\r\n\r\n  /** Menu items inside the current menu. */\r\n  private _items: SdsMenuItemComponent[] = [];\r\n\r\n  /** Subscription to tab events on the menu panel */\r\n  private _tabSubscription = Subscription.EMPTY;\r\n\r\n  /** Stores <sds-menu> classes */\r\n  private _previousPanelClass: string;\r\n\r\n  /** Config object to be passed into the menu's ngClass */\r\n  _classList: { [key: string]: boolean } = {};\r\n\r\n  /** Current state of the panel animation. */\r\n  _panelAnimationState: 'void' | 'enter' = 'void';\r\n\r\n  /** Grab the component template */\r\n  @ViewChild(TemplateRef) templateRef: TemplateRef<any>;\r\n\r\n  /**\r\n   * Size of menu component.\r\n   * Affects the font-size of the menu items and\r\n   * the size of the close button in the menu header\r\n   */\r\n  @Input() size: MenuSizes;\r\n\r\n  /** Position of the menu in the X axis. */\r\n  @Input()\r\n  get xPosition(): MenuPositionX {\r\n    return this._xPosition;\r\n  }\r\n  set xPosition(value: MenuPositionX) {\r\n    this._xPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Position of the menu in the Y axis. */\r\n  @Input()\r\n  get yPosition(): MenuPositionY {\r\n    return this._yPosition;\r\n  }\r\n  set yPosition(value: MenuPositionY) {\r\n    this._yPosition = value;\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  /** Whether menu panel overlaps trigger element */\r\n  @Input()\r\n  get overlapTrigger(): boolean {\r\n    return this._overlapTrigger;\r\n  }\r\n  set overlapTrigger(value: boolean) {\r\n    this._overlapTrigger = coerceBooleanProperty(value);\r\n  }\r\n  private _overlapTrigger = false;\r\n\r\n  /** Transfer classes from the sds-menu to the overlay container */\r\n  @Input('class')\r\n  set panelClass(classes: string) {\r\n    const previousPanelClass = this._previousPanelClass;\r\n    // Remove previous classes from current set of classes\r\n    if (previousPanelClass && previousPanelClass.length) {\r\n      previousPanelClass.split(' ').forEach((className: string) => {\r\n        this._classList[className] = false;\r\n      });\r\n    }\r\n\r\n    this._previousPanelClass = classes;\r\n\r\n    // Adds new classes to current set of classes\r\n    if (classes && classes.length) {\r\n      classes.split(' ').forEach((className: string) => {\r\n        this._classList[className] = true;\r\n      });\r\n\r\n      // Remove all classes from <sds-menu>\r\n      this._elementRef.nativeElement.className = '';\r\n    }\r\n  }\r\n\r\n  /** Event emitted when the menu is closed. */\r\n  @Output() closed = new EventEmitter<void | 'click' | 'keydown' | 'tab'>();\r\n\r\n  constructor(private _elementRef: ElementRef<HTMLElement>) {}\r\n\r\n  ngOnInit() {\r\n    this.setPositionClasses();\r\n  }\r\n\r\n  ngAfterContentInit() {\r\n    this._keyManager = new FocusKeyManager<SdsMenuItemComponent>(\r\n      this._items\r\n    ).withWrap();\r\n    this._tabSubscription = this._keyManager.tabOut.subscribe(() =>\r\n      this.closed.emit('tab')\r\n    );\r\n  }\r\n\r\n  ngOnDestroy() {\r\n    this._tabSubscription.unsubscribe();\r\n    this.closed.complete();\r\n  }\r\n\r\n  /** Focus the first item in the menu */\r\n  focusFirstItem(origin: FocusOrigin = 'program'): void {\r\n    this._keyManager.setFocusOrigin(origin).setFirstItemActive();\r\n  }\r\n\r\n  /** Adds classes to the menu panel based on its position */\r\n  setPositionClasses(\r\n    posX: MenuPositionX = this.xPosition,\r\n    posY: MenuPositionY = this.yPosition\r\n  ) {\r\n    const classes = this._classList;\r\n    classes['sds-menu-before'] = posX === 'before';\r\n    classes['sds-menu-after'] = posX === 'after';\r\n    classes['sds-menu-above'] = posY === 'above';\r\n    classes['sds-menu-below'] = posY === 'below';\r\n  }\r\n\r\n  /** Adds a menu item with the menu. */\r\n  addItem(item: SdsMenuItemComponent) {\r\n    if (this._items.indexOf(item) === -1) {\r\n      this._items.push(item);\r\n    }\r\n  }\r\n\r\n  /** Inserts a menu item at an index */\r\n  insertItem(item: SdsMenuItemComponent, index: number) {\r\n    if (this._items.indexOf(item) === -1 && index < this._items.length) {\r\n      this._items.splice(index, 0, item);\r\n    }\r\n  }\r\n\r\n  /** Removes an item from the menu. */\r\n  removeItem(item: SdsMenuItemComponent) {\r\n    const index = this._items.indexOf(item);\r\n    if (this._items.indexOf(item) > -1) {\r\n      this._items.splice(index, 1);\r\n    }\r\n  }\r\n\r\n  /** Handle a keyboard event from the menu */\r\n  _handleKeydown(event: KeyboardEvent) {\r\n    // tslint:disable-next-line: deprecation\r\n    const keyCode = event.keyCode;\r\n    const manager = this._keyManager;\r\n\r\n    switch (keyCode) {\r\n      case ESCAPE:\r\n        this.closed.emit('keydown');\r\n        break;\r\n      case HOME:\r\n      case END:\r\n        if (!hasModifierKey(event)) {\r\n          keyCode === HOME\r\n            ? manager.setFirstItemActive()\r\n            : manager.setLastItemActive();\r\n          event.preventDefault();\r\n        }\r\n        break;\r\n      default:\r\n        if (keyCode === UP_ARROW || keyCode === DOWN_ARROW) {\r\n          manager.setFocusOrigin('keyboard');\r\n        }\r\n\r\n        manager.onKeydown(event);\r\n    }\r\n  }\r\n\r\n  /** Starts the enter animation. */\r\n  _startAnimation() {\r\n    this._panelAnimationState = 'enter';\r\n  }\r\n\r\n  /** Callback that is invoked when the panel animation completes. */\r\n  _onAnimationDone(event: AnimationEvent) {}\r\n\r\n  /** Resets the panel animation to its initial state. */\r\n  _resetAnimation() {\r\n    this._panelAnimationState = 'void';\r\n  }\r\n\r\n  _onAnimationStart(event: AnimationEvent) {\r\n    // Scroll the content element to the top as soon as the animation starts.\r\n    if (event.toState === 'enter' && this._keyManager.activeItemIndex === 0) {\r\n      event.element.scrollTop = 0;\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    }
                ],
                "line": 166,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit",
                "AfterContentInit",
                "OnDestroy",
                "SdsMenuInterface"
            ],
            "accessors": {
                "xPosition": {
                    "name": "xPosition",
                    "setSignature": {
                        "name": "xPosition",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 116,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "yPosition": {
                    "name": "yPosition",
                    "setSignature": {
                        "name": "yPosition",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": ""
                            }
                        ],
                        "returnType": "void",
                        "line": 126,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "overlapTrigger": {
                    "name": "overlapTrigger",
                    "setSignature": {
                        "name": "overlapTrigger",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": "boolean"
                            }
                        ],
                        "returnType": "void",
                        "line": 136,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "boolean",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "panelClass": {
                    "name": "panelClass",
                    "setSignature": {
                        "name": "panelClass",
                        "type": "void",
                        "args": [
                            {
                                "name": "classes",
                                "type": "string"
                            }
                        ],
                        "returnType": "void",
                        "line": 143,
                        "description": "<p>Transfer classes from the sds-menu to the overlay container </p>\n",
                        "jsdoctags": [
                            {
                                "name": "classes",
                                "type": "string",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<ng-template>\r\n  <div\r\n    class=\"sds-overlay minw-menu maxw-mobile radius-overlay\"\r\n    [ngClass]=\"_classList\"\r\n    (keydown)=\"_handleKeydown($event)\"\r\n    (click)=\"closed.emit('click')\"\r\n    [@transformMenu]=\"_panelAnimationState\"\r\n    (@transformMenu.start)=\"_onAnimationStart($event)\"\r\n    (@transformMenu.done)=\"_onAnimationDone($event)\"\r\n    tabindex=\"-1\"\r\n    role=\"menu\"\r\n  >\r\n    <div class=\"sds-menu\" [class.sds-menu--small]=\"size === 'sm'\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"
        },
        {
            "name": "SdsMenuHeaderComponent",
            "id": "component-SdsMenuHeaderComponent-2c7b5bada45dcbc55288ff7005ed65a4",
            "file": "libs/packages/components/src/lib/menu/menu-header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-menu-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "menu-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "hideClose",
                    "defaultValue": "false",
                    "line": 8
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-menu-header',\r\n  templateUrl: 'menu-header.component.html'\r\n})\r\nexport class SdsMenuHeaderComponent {\r\n  @Input() hideClose = false;\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"sds-menu__header\">\r\n  <span class=\"sds-menu__header-title\"> <ng-content></ng-content> </span>\r\n  <button\r\n    *ngIf=\"!hideClose\"\r\n    aria-label=\"Close Menu\"\r\n    sds-menu-item\r\n    role=\"button\"\r\n  >\r\n  <fa-icon\r\n  [icon]=\"['fas', 'times']\"\r\n  [fixedWidth]=\"true\"\r\n></fa-icon>\r\n  </button>\r\n</div>\r\n"
        },
        {
            "name": "SdsMenuItemComponent",
            "id": "component-SdsMenuItemComponent-36d3d8ec01e9cb390007a9a38bab6a3b",
            "file": "libs/packages/components/src/lib/menu/menu-item.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "[sds-menu-item]",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "description": "<p>Whether the menu item should be disabled </p>\n",
                    "line": 39
                },
                {
                    "name": "role",
                    "defaultValue": "'menuitem'",
                    "description": "<p>ARIA role for the menu item. </p>\n",
                    "line": 29,
                    "type": ""
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "_disabled",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "<p>Holds the disable status value </p>\n",
                    "line": 35,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getClass",
                    "args": [],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 66,
                    "description": "<p>Get item class </p>\n"
                },
                {
                    "name": "focus",
                    "args": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Focuses the menu item. </p>\n",
                    "jsdoctags": [
                        {
                            "name": "origin",
                            "type": "FocusOrigin",
                            "defaultValue": "'program'",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 80,
                    "description": "<p>Stop listening to focus changes and remove item from parent </p>\n"
                }
            ],
            "hostBindings": [
                {
                    "name": "attr.tabIndex",
                    "defaultValue": "this.disabled ? '-1' : '0'",
                    "description": "<p>Menu item tab index </p>\n",
                    "line": 32
                },
                {
                    "name": "class",
                    "defaultValue": "this._getClass()",
                    "description": "<p>Menu item class </p>\n",
                    "line": 26
                }
            ],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ElementRef,\r\n  OnDestroy,\r\n  Inject,\r\n  Input,\r\n  HostBinding,\r\n  ChangeDetectionStrategy,\r\n  ViewEncapsulation,\r\n  Optional\r\n} from '@angular/core';\r\nimport { FocusableOption, FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';\r\nimport { coerceBooleanProperty } from '@angular/cdk/coercion';\r\nimport { SDS_MENU_TOKEN, SdsMenuInterface } from './menu.component';\r\nimport { SdsMenuHeaderComponent } from './menu-header.component';\r\n\r\n@Component({\r\n  // tslint:disable-next-line: component-selector\r\n  selector: '[sds-menu-item]',\r\n  template: '<ng-content></ng-content>',\r\n  changeDetection: ChangeDetectionStrategy.OnPush,\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class SdsMenuItemComponent implements FocusableOption, OnDestroy {\r\n  /** Menu item class */\r\n  @HostBinding('class') class = this._getClass();\r\n\r\n  /** ARIA role for the menu item. */\r\n  @HostBinding('attr.role') @Input() role: 'menuitem' = 'menuitem';\r\n\r\n  /** Menu item tab index */\r\n  @HostBinding('attr.tabIndex') tabIndex = this.disabled ? '-1' : '0';\r\n\r\n  /** Holds the disable status value */\r\n  private _disabled = false;\r\n\r\n  /** Whether the menu item should be disabled */\r\n  @Input()\r\n  get disabled() {\r\n    return this._disabled;\r\n  }\r\n  set disabled(value: any) {\r\n    this._disabled = coerceBooleanProperty(value);\r\n  }\r\n\r\n  constructor(\r\n    private _elementRef: ElementRef<HTMLElement>,\r\n    private _focusMonitor: FocusMonitor,\r\n    @Inject(SDS_MENU_TOKEN)\r\n    private _parentMenu: SdsMenuInterface<SdsMenuItemComponent>,\r\n    @Optional() private _parentMenuHeader: SdsMenuHeaderComponent\r\n  ) {\r\n    // Start listening to focus changes\r\n    _focusMonitor.monitor(this._elementRef, false);\r\n    // Add this menu item to its parent menu\r\n    // If item its inside a header\r\n    // add it as the first item in the list\r\n    if (_parentMenuHeader) {\r\n      _parentMenu.insertItem(this, 0);\r\n    } else {\r\n      _parentMenu.addItem(this);\r\n    }\r\n  }\r\n\r\n  /** Get item class */\r\n  _getClass(): string {\r\n    const headerButtonSmall =\r\n      this._parentMenu.size === 'sm' ? 'sds-button--small' : '';\r\n    return this._parentMenuHeader\r\n      ? `sds-button sds-button--circular ${headerButtonSmall}`\r\n      : 'sds-menu__item';\r\n  }\r\n\r\n  /** Focuses the menu item. */\r\n  focus(origin: FocusOrigin = 'program'): void {\r\n    this._focusMonitor.focusVia(this._elementRef.nativeElement, origin);\r\n  }\r\n\r\n  /** Stop listening to focus changes and remove item from parent */\r\n  ngOnDestroy() {\r\n    this._focusMonitor.stopMonitoring(this._elementRef);\r\n    this._parentMenu.removeItem(this);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>"
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "_parentMenu",
                        "type": "SdsMenuInterface<SdsMenuItemComponent>"
                    },
                    {
                        "name": "_parentMenuHeader",
                        "type": "SdsMenuHeaderComponent"
                    }
                ],
                "line": 44,
                "jsdoctags": [
                    {
                        "name": "_elementRef",
                        "type": "ElementRef<HTMLElement>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentMenu",
                        "type": "SdsMenuInterface<SdsMenuItemComponent>",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "_parentMenuHeader",
                        "type": "SdsMenuHeaderComponent",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "FocusableOption",
                "OnDestroy"
            ],
            "accessors": {
                "disabled": {
                    "name": "disabled",
                    "setSignature": {
                        "name": "disabled",
                        "type": "void",
                        "args": [
                            {
                                "name": "value",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 42,
                        "jsdoctags": [
                            {
                                "name": "value",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            }
        },
        {
            "name": "SdsPageComponent",
            "id": "component-SdsPageComponent-c43ec39fbd6823c2b2880e76e6321d5e",
            "file": "libs/packages/components/src/lib/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-page",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"grid-container\"><ng-content></ng-content></div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-page',\r\n  template: `\r\n    <div class=\"grid-container\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-page-options',\r\n  template: `\r\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageOptionsComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 9
            },
            "implements": [
                "OnInit"
            ]
        },
        {
            "name": "SdsPageOptionsComponent",
            "id": "component-SdsPageOptionsComponent-c43ec39fbd6823c2b2880e76e6321d5e",
            "file": "libs/packages/components/src/lib/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-page-options",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"grid-row position-relative\"><ng-content></ng-content></div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 24
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, OnInit } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-page',\r\n  template: `\r\n    <div class=\"grid-container\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-page-options',\r\n  template: `\r\n    <div class=\"grid-row position-relative\"><ng-content></ng-content></div>\r\n  `\r\n})\r\nexport class SdsPageOptionsComponent implements OnInit {\r\n  constructor() {}\r\n\r\n  ngOnInit() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 21
            },
            "implements": [
                "OnInit"
            ]
        },
        {
            "name": "SdsSearchComponent",
            "id": "component-SdsSearchComponent-ec6d144487538d704f3f53538e09acc5",
            "file": "libs/packages/components/src/lib/search/search.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-search",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "search.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "inputClass",
                    "line": 23,
                    "type": "string"
                },
                {
                    "name": "parentSelector",
                    "line": 24,
                    "type": "string"
                },
                {
                    "name": "placeholder",
                    "line": 22,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "term",
                    "defaultValue": "new EventEmitter<string>()",
                    "line": 25,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "buttonEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 20,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'buttonEl', {read: ElementRef}"
                        }
                    ]
                },
                {
                    "name": "inputEl",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 19,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'inputEl', {read: ElementRef}"
                        }
                    ]
                },
                {
                    "name": "inputState",
                    "defaultValue": "{\r\n    initial: { visible: undefined },\r\n    visible: undefined\r\n  }",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 27
                }
            ],
            "methodsClass": [
                {
                    "name": "calculateInputWidth",
                    "args": [],
                    "optional": false,
                    "returnType": "number",
                    "typeParameters": [],
                    "line": 85
                },
                {
                    "name": "focusChange",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 79,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "handleClick",
                    "args": [
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 46,
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "isInputVisible",
                    "args": [],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 56
                },
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "removeInputVisibleStyles",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 71
                },
                {
                    "name": "setInputVisibleStyles",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 62
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import {\r\n  Component,\r\n  ViewChild,\r\n  ElementRef,\r\n  Output,\r\n  EventEmitter,\r\n  Input,\r\n  AfterViewInit\r\n} from '@angular/core';\r\n\r\nimport { FocusMonitor } from '@angular/cdk/a11y';\r\nimport { ViewportRuler } from '@angular/cdk/overlay';\r\n\r\n@Component({\r\n  selector: 'sds-search',\r\n  templateUrl: 'search.component.html'\r\n})\r\nexport class SdsSearchComponent implements AfterViewInit {\r\n  @ViewChild('inputEl', { read: ElementRef }) inputEl: ElementRef;\r\n  @ViewChild('buttonEl', { read: ElementRef }) buttonEl: ElementRef;\r\n\r\n  @Input() placeholder: string;\r\n  @Input() inputClass: string;\r\n  @Input() parentSelector: string;\r\n  @Output() term = new EventEmitter<string>();\r\n\r\n  inputState = {\r\n    initial: { visible: undefined },\r\n    visible: undefined\r\n  };\r\n\r\n  constructor(\r\n    private focusMonitor: FocusMonitor,\r\n    private viewportRuler: ViewportRuler\r\n  ) {}\r\n\r\n  ngAfterViewInit() {\r\n    this.inputState.initial.visible = this.isInputVisible();\r\n    this.inputState.visible = this.inputState.initial.visible;\r\n    this.viewportRuler.change(0).subscribe(() => {\r\n      this.inputState.initial.visible = this.isInputVisible();\r\n      this.inputState.visible = this.inputState.initial.visible;\r\n    });\r\n  }\r\n\r\n  handleClick(event) {\r\n    event.preventDefault();\r\n    if (!this.inputState.visible) {\r\n      this.setInputVisibleStyles();\r\n      this.focusMonitor.focusVia(this.inputEl, 'program');\r\n    } else if (this.inputEl.nativeElement.value) {\r\n      this.term.emit(this.inputEl.nativeElement.value);\r\n    }\r\n  }\r\n\r\n  isInputVisible(): boolean {\r\n    return this.inputEl.nativeElement.getBoundingClientRect().width\r\n      ? true\r\n      : false;\r\n  }\r\n\r\n  setInputVisibleStyles() {\r\n    const inputWidth = this.calculateInputWidth();\r\n    this.inputEl.nativeElement.style.display = 'block';\r\n    this.inputEl.nativeElement.style.position = 'absolute';\r\n    this.inputEl.nativeElement.style.left = `-${inputWidth}px`;\r\n    this.inputEl.nativeElement.style.width = `${inputWidth}px`;\r\n    this.inputState.visible = true;\r\n  }\r\n\r\n  removeInputVisibleStyles() {\r\n    this.inputEl.nativeElement.style.display = '';\r\n    this.inputEl.nativeElement.style.position = '';\r\n    this.inputEl.nativeElement.style.left = '';\r\n    this.inputEl.nativeElement.style.width = '';\r\n    this.inputState.visible = false;\r\n  }\r\n\r\n  focusChange(event) {\r\n    if (event === null && !this.inputState.initial.visible) {\r\n      this.removeInputVisibleStyles();\r\n    }\r\n  }\r\n\r\n  calculateInputWidth(): number {\r\n    const buttonElement = this.buttonEl.nativeElement;\r\n    const inputElement = this.inputEl.nativeElement;\r\n    const rightPosition = buttonElement.getBoundingClientRect().left;\r\n    const leftPosition = this.parentSelector\r\n      ? inputElement.closest(this.parentSelector).getBoundingClientRect().left\r\n      : 0;\r\n    return Math.floor(rightPosition - leftPosition);\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "focusMonitor",
                        "type": "FocusMonitor"
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler"
                    }
                ],
                "line": 30,
                "jsdoctags": [
                    {
                        "name": "focusMonitor",
                        "type": "FocusMonitor",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "viewportRuler",
                        "type": "ViewportRuler",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "AfterViewInit"
            ],
            "templateData": "<form class=\"usa-search usa-search--small\">\r\n  <div\r\n    role=\"search\"\r\n    cdkMonitorSubtreeFocus\r\n    (cdkFocusChange)=\"focusChange($event)\"\r\n  >\r\n    <label class=\"usa-sr-only\" for=\"search-field-small\"> Search </label>\r\n    <input\r\n      #inputEl\r\n      class=\"usa-input\"\r\n      [ngClass]=\"inputClass\"\r\n      id=\"search-field-small\"\r\n      type=\"search\"\r\n      name=\"search\"\r\n      [placeholder]=\"placeholder\"\r\n    />\r\n    <button\r\n      #buttonEl\r\n      (click)=\"handleClick($event)\"\r\n      class=\"usa-button\"\r\n      type=\"submit\"\r\n    >\r\n      <span class=\"usa-sr-only\">Search</span>\r\n    </button>\r\n  </div>\r\n</form>\r\n\r\n"
        },
        {
            "name": "SdsSearchResultListComponent",
            "id": "component-SdsSearchResultListComponent-fad685c2f6ff41ec2084f79d1eda7a07",
            "file": "libs/packages/components/src/lib/search-result-list/search-result-list.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-search-result-list",
            "styleUrls": [
                "./search-result-list.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-result-list.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "divider",
                    "defaultValue": "true",
                    "description": "<p>Show divider between results</p>\n",
                    "line": 17
                },
                {
                    "name": "model",
                    "description": "<p>List of items</p>\n",
                    "line": 12,
                    "type": "any[]"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "resultContentTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 22,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                }
            ],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, ContentChild, TemplateRef } from '@angular/core';\r\n@Component({\r\n  selector: 'sds-search-result-list',\r\n  templateUrl: './search-result-list.component.html',\r\n  styleUrls: ['./search-result-list.component.scss']\r\n})\r\nexport class SdsSearchResultListComponent {\r\n\r\n  /**\r\n   * List of items\r\n   */\r\n  @Input() model: any[];\r\n\r\n  /**\r\n   * Show divider between results\r\n   */\r\n  @Input() divider = true;\r\n\r\n  /**\r\n   * Child Template to be used to display the data for each item in the list of items\r\n   */\r\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-result-list.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<div *ngFor=\"let item of model\">\r\n    <hr *ngIf=\"divider\" class=\"thin\" />\r\n    <ng-container *ngTemplateOutlet=\"resultContentTemplate,\r\n                   context: { $implicit: item }\"></ng-container>\r\n</div>\r\n<hr *ngIf=\"divider && model?.length\" class=\"thin\" />\r\n<div *ngIf=\"!model|| model.length===0\">\r\n    <div class=\"grid-row border-1px border-base-lighter bg-base-lightest\">\r\n      <div class=\"grid-col-auto text-center text-base margin-4\">\r\n        <fa-icon [icon]=\"['sds', 'search']\" [classes]=\"['search']\" size=\"7x\"></fa-icon>\r\n      </div>\r\n      <div class=\"grid-col-fill display-flex flex-column padding-y-1\">\r\n        <h1 class=\"margin-bottom-105 text-semibold\">No matches found</h1>\r\n        <p class=\"margin-y-0 font-sans-lg\">We couldn't find a match for your search criteria.</p>\r\n        <p class=\"margin-y-0 font-sans-lg\">Please try another search or go back to previous results.</p>\r\n        <button class=\"usa-button usa-button--secondary width-card margin-y-2\">Go Back</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n"
        },
        {
            "name": "SDSSelectedResultComponent",
            "id": "component-SDSSelectedResultComponent-b09a689e17744dbdab7134b3b065cce7",
            "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "SDS_SelectedResult_VALUE_ACCESSOR"
                }
            ],
            "selector": "sds-selected-result",
            "styleUrls": [
                "./selected-result.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./selected-result.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "description": "<p>Configuration for the Selected Results control </p>\n",
                    "line": 35,
                    "type": "SDSSelectedResultConfiguration"
                },
                {
                    "name": "disabled",
                    "line": 48,
                    "type": "boolean"
                },
                {
                    "name": "itemTemplate",
                    "description": "<p>Allow to insert a customized template for suggestions to use</p>\n",
                    "line": 23,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "model",
                    "type": "SDSSelectedItemModel",
                    "optional": false,
                    "description": "<p>The data model that has the selected item</p>\n",
                    "line": 28,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 40,
                    "modifierKind": [
                        114
                    ]
                },
                {
                    "name": "propogateChange",
                    "defaultValue": "() => {...}",
                    "type": "function",
                    "optional": false,
                    "description": "<p>Stored Event for ControlValueAccessor</p>\n",
                    "line": 45,
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "getObjectValue",
                    "args": [
                        {
                            "name": "object",
                            "type": "Object"
                        },
                        {
                            "name": "propertyFields",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "string",
                    "typeParameters": [],
                    "line": 86,
                    "description": "<p>Gets the string value from the specifed properties of an object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2295,
                                "end": 2301,
                                "flags": 0,
                                "escapedText": "object"
                            },
                            "type": "Object",
                            "tagName": {
                                "pos": 2289,
                                "end": 2294,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2316,
                                "end": 2330,
                                "flags": 0,
                                "escapedText": "propertyFields"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2310,
                                "end": 2315,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>comma seperated list with periods depth of object</p>\n"
                        }
                    ]
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 68,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 72,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "removeItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "object"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 54,
                    "description": "<p>Removes item from the model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1552,
                                "end": 1556,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "object",
                            "tagName": {
                                "pos": 1546,
                                "end": 1551,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "setDisabledState",
                    "args": [
                        {
                            "name": "isDisabled",
                            "type": "boolean"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 76,
                    "jsdoctags": [
                        {
                            "name": "isDisabled",
                            "type": "boolean",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "obj",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 62,
                    "jsdoctags": [
                        {
                            "name": "obj",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, TemplateRef, forwardRef } from '@angular/core';\r\nimport { SDSSelectedItemModel } from './models/sds-selectedItem.model';\r\nimport { SDSSelectedResultConfiguration } from './models/SDSSelectedResultConfiguration';\r\nimport { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';\r\nimport { SDSSelectedItemModelHelper } from './models/sds-selected-item-model-helper';\r\nconst SDS_SelectedResult_VALUE_ACCESSOR: any = {\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\r\n  multi: true\r\n};\r\n\r\n@Component({\r\n  selector: 'sds-selected-result',\r\n  templateUrl: './selected-result.component.html',\r\n  styleUrls: ['./selected-result.component.scss'],\r\n  providers: [SDS_SelectedResult_VALUE_ACCESSOR]\r\n})\r\nexport class SDSSelectedResultComponent implements ControlValueAccessor {\r\n\r\n  /**\r\n  * Allow to insert a customized template for suggestions to use\r\n  */\r\n  @Input() itemTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * The data model that has the selected item\r\n   */\r\n  public model: SDSSelectedItemModel;\r\n\r\n\r\n  /**\r\n  * Configuration for the Selected Results control \r\n  */\r\n  @Input()\r\n  public configuration: SDSSelectedResultConfiguration;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public onTouchedCallback: () => void = () => null;\r\n\r\n  /**\r\n   * Stored Event for ControlValueAccessor\r\n   */\r\n  public propogateChange: (_: any) => void = (_: any) => null;\r\n\r\n  @Input()\r\n  public disabled: boolean;\r\n\r\n  /**\r\n   * Removes item from the model\r\n   * @param item \r\n   */\r\n  removeItem(item: object) {\r\n    if (!this.disabled) {\r\n      SDSSelectedItemModelHelper.removeItem(item, this.configuration.primaryKeyField, this.model.items);\r\n      this.propogateChange(this.model);\r\n      this.onTouchedCallback();\r\n    }\r\n  }\r\n\r\n  writeValue(obj: any): void {\r\n    if (obj instanceof SDSSelectedItemModel) {\r\n      this.model = obj as SDSSelectedItemModel;\r\n    }\r\n  }\r\n\r\n  registerOnChange(fn: any): void {\r\n    this.propogateChange = fn;\r\n  }\r\n\r\n  registerOnTouched(fn: any): void {\r\n    this.onTouchedCallback = fn;\r\n  }\r\n\r\n  setDisabledState(isDisabled: boolean): void {\r\n    this.disabled = isDisabled;\r\n  }\r\n\r\n\r\n  /**\r\n   * Gets the string value from the specifed properties of an object\r\n   * @param object \r\n   * @param propertyFields comma seperated list with periods depth of object\r\n   */\r\n  getObjectValue(object: Object, propertyFields: string): string {\r\n    let value = '';\r\n    let current = object;\r\n    let fieldSplit = propertyFields.split(',');\r\n    for (let i = 0; i < fieldSplit.length; i++) {\r\n      let fieldValue = fieldSplit[i];\r\n      let fieldPartSplit = fieldValue.split('.');\r\n      for (let j = 0; j < fieldPartSplit.length; j++) {\r\n        let fieldCheckValue = fieldPartSplit[j];\r\n        if (current) {\r\n          current = current[fieldCheckValue];\r\n        }\r\n      }\r\n\r\n      if (current) {\r\n        value += current.toString() + ' ';\r\n      }\r\n      current = object;\r\n    }\r\n    return value.trim();\r\n  }\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./selected-result.component.scss"
                }
            ],
            "stylesData": "",
            "implements": [
                "ControlValueAccessor"
            ],
            "templateData": "<ul *ngIf=\"model\" [attr.aria-label]=\"configuration.labelText +' results'\" class=\"usa-list usa-list--unstyled sds-autocomplete-selected\" aria-relevant=\"additions\" role=\"listbox\" aria-live=\"polite\">\r\n    <li role=\"option\" *ngFor=\"let result of model.items; let i = index\">\r\n        <div [attr.class]=\" disabled ? 'sds-tag sds-tag--chip sds-autocomplete-selected__item sds-autocomplete-selected__item--disabled' :'sds-tag sds-tag--chip sds-autocomplete-selected__item'\">\r\n            <ng-container *ngIf=\"itemTemplate\" [ngTemplateOutlet]=\"itemTemplate\" [ngTemplateOutletContext]=\"{$implicit:result}\">\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!itemTemplate\">\r\n                <span class=\"display-block text-semibold\"> {{ getObjectValue(result, configuration.primaryTextField) }}\r\n                </span>\r\n                <ng-container *ngIf=\"configuration.secondaryTextField && result[configuration.secondaryTextField] \">\r\n                    {{ result[configuration.secondaryTextField] }}\r\n                </ng-container>\r\n            </ng-container>\r\n            <button [attr.aria-label]=\"'Remove Item ' + getObjectValue(result, configuration.primaryTextField)\" [class.text-base]=\"disabled\" aria-hidden=\"false\" class=\"sds-tag__close  position-absolute right-1 top-2px\" (click)=\"removeItem(result)\" (keyup.enter)=\"removeItem(result)\">\r\n        <fa-icon [icon]=\"['fas', 'times']\" size=\"sm\"></fa-icon>\r\n      </button>\r\n        </div>\r\n    </li>\r\n</ul>"
        },
        {
            "name": "SdsSideNavigationComponent",
            "id": "component-SdsSideNavigationComponent-8ce2fe1790ead6c39435c8d33d49240e",
            "file": "libs/packages/components/src/lib/side-navigation/side-navigation.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-side-navigation",
            "styleUrls": [
                "./side-navigation.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./side-navigation.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "description": "<p>Model used for the different display portions of the side navigation </p>\n",
                    "line": 71,
                    "type": "SideNavigationModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "description": "<p>event for event based</p>\n",
                    "line": 144,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 66
                },
                {
                    "name": "sideNavEVENTLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for event response</p>\n",
                    "line": 35,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavEVENTLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavHREFLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for external href </p>\n",
                    "line": 29,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavHREFLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavLabelLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for side menu items that are a label</p>\n",
                    "line": 23,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavLabelLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "sideNavRouteLinkTemplate",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Reference to the the Template used for internal links</p>\n",
                    "line": 17,
                    "decorators": [
                        {
                            "name": "ViewChild",
                            "stringifiedArguments": "'sideNavRouteLinkTemplate'"
                        }
                    ],
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 116,
                    "description": "<p>Deselects all the items in the side navigation model</p>\n"
                },
                {
                    "name": "deselectItem",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 129,
                    "description": "<p>checks if item is selected and if selcted will check children and will unselect</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": "item",
                            "type": "NavigationLink",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getItemTemplate",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "TemplateRef<any>",
                    "typeParameters": [],
                    "line": 41,
                    "description": "<p>Takes the navigation item and returns the template to be used</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1355,
                                "end": 1359,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 1349,
                                "end": 1354,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>navigation item</p>\n"
                        }
                    ]
                },
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 150,
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4083,
                                "end": 4087,
                                "flags": 0,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "tagName": {
                                "pos": 4077,
                                "end": 4082,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "queryStringBuilder",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 178,
                    "description": "<p>creates query string</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4725,
                                "end": 4729,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 4719,
                                "end": 4724,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "select",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 77,
                    "description": "<p>Selects new item and parents and deselects previous</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2295,
                                "end": 2297,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2289,
                                "end": 2294,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "selectItem",
                    "args": [
                        {
                            "name": "id",
                            "type": "string"
                        },
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        },
                        {
                            "name": "parent",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 91,
                    "description": "<p>Selects item if matches passed in id and will select parent</p>\n",
                    "modifierKind": [
                        112
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2608,
                                "end": 2610,
                                "flags": 0,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "tagName": {
                                "pos": 2602,
                                "end": 2607,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2625,
                                "end": 2629,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 2619,
                                "end": 2624,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": {
                                "pos": 2644,
                                "end": 2650,
                                "flags": 0,
                                "escapedText": "parent"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 2638,
                                "end": 2643,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "urlBuilder",
                    "args": [
                        {
                            "name": "item",
                            "type": "NavigationLink"
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 159,
                    "description": "<p>creates url from provided route and query params</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4272,
                                "end": 4276,
                                "flags": 0,
                                "escapedText": "item"
                            },
                            "type": "NavigationLink",
                            "tagName": {
                                "pos": 4266,
                                "end": 4271,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter, ViewChild, TemplateRef } from '@angular/core';\r\nimport { SideNavigationModel, NavigationLink } from './model/side-navigation-model';\r\nimport { INavigationLink, NavigationMode } from '../common-navigation/common-navigation-model';\r\nimport { NavigationHelper } from '../common-navigation/navigation-helper';\r\n\r\n@Component({\r\n  selector: 'sds-side-navigation',\r\n  templateUrl: './side-navigation.component.html',\r\n  styleUrls: ['./side-navigation.component.scss']\r\n})\r\nexport class SdsSideNavigationComponent {\r\n\r\n  /**\r\n   * Reference to the the Template used for internal links\r\n   */\r\n  @ViewChild('sideNavRouteLinkTemplate')\r\n  private sideNavRouteLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Reference to the the Template used for side menu items that are a label\r\n   */\r\n  @ViewChild('sideNavLabelLinkTemplate')\r\n  private sideNavLabelLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Reference to the the Template used for external href \r\n   */\r\n  @ViewChild('sideNavHREFLinkTemplate')\r\n  private sideNavHREFLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Reference to the the Template used for event response\r\n   */\r\n  @ViewChild('sideNavEVENTLinkTemplate')\r\n  private sideNavEVENTLinkTemplate: TemplateRef<any>;\r\n\r\n  /**\r\n   * Takes the navigation item and returns the template to be used\r\n   * @param item navigation item\r\n   */\r\n  getItemTemplate(item: NavigationLink): TemplateRef<any> {\r\n    let template = null;\r\n    switch (item.mode) {\r\n      case NavigationMode.EVENT:\r\n        template = this.sideNavEVENTLinkTemplate;\r\n        break;\r\n      case NavigationMode.EXTERNAL:\r\n        template = this.sideNavHREFLinkTemplate;\r\n        break;\r\n      case NavigationMode.INTERNAL:\r\n        template = this.sideNavRouteLinkTemplate;\r\n        break;\r\n      case NavigationMode.LABEL:\r\n        template = this.sideNavLabelLinkTemplate;\r\n        break;\r\n      default:\r\n        template = null;\r\n        break;\r\n    }\r\n    return template;\r\n  }\r\n\r\n  /**\r\n   * Navigation helper\r\n   */\r\n  navigationHelper = new NavigationHelper();\r\n\r\n  /**\r\n   * Model used for the different display portions of the side navigation \r\n   */\r\n  @Input() model: SideNavigationModel;\r\n\r\n  /**\r\n   * Selects new item and parents and deselects previous\r\n   * @param id \r\n   */\r\n  select(id: string) {\r\n    this.deselect();\r\n    for (let i = 0; i < this.model.navigationLinks.length; i++) {\r\n      let item = this.model.navigationLinks[i];\r\n      this.selectItem(id, item, null);\r\n    }\r\n  }\r\n\r\n  /**\r\n   * Selects item if matches passed in id and will select parent\r\n   * @param id \r\n   * @param item \r\n   * @param parent \r\n   */\r\n  private selectItem(id: string, item: NavigationLink, parent: NavigationLink) {\r\n    if (item.id === id) {\r\n      item.selected = true;\r\n      if (parent) {\r\n        parent.selected = true;\r\n      }\r\n    } else {\r\n      if (item.children) {\r\n        for (let i = 0; i < item.children.length; i++) {\r\n          let childItem = item.children[i];\r\n          this.selectItem(id, childItem, item);\r\n        }\r\n        if (item.selected) {\r\n          if (parent) {\r\n            parent.selected = true;\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n\r\n  /**\r\n   * Deselects all the items in the side navigation model\r\n   */\r\n  deselect() {\r\n    if (this.model) {\r\n      if (this.model.navigationLinks) {\r\n        for (let i = 0; i < this.model.navigationLinks.length; i++) {\r\n          this.deselectItem(this.model.navigationLinks[i]);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * checks if item is selected and if selcted will check children and will unselect\r\n   */\r\n  private deselectItem(item: NavigationLink) {\r\n    if (item.selected) {\r\n      item.selected = false;\r\n      if (item.children) {\r\n        for (let i = 0; i < item.children.length; i++) {\r\n          this.deselectItem(item.children[i]);\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  /**\r\n   * event for event based\r\n   */\r\n  @Output()\r\n  linkEvent = new EventEmitter<INavigationLink>();\r\n\r\n  /**\r\n   * Link clicked and emits the link data into an event\r\n   * @param link \r\n   */\r\n  linkClickEvent(link: INavigationLink) {\r\n    this.linkEvent.emit(link);\r\n    return false;\r\n  }\r\n\r\n  /**\r\n   * creates url from provided route and query params\r\n   * @param item \r\n   */\r\n  urlBuilder(item: NavigationLink) {\r\n    let url = item.route;\r\n    let queryParams = this.queryStringBuilder(item);\r\n    if (queryParams) {\r\n      if (url.indexOf('?') === -1) {\r\n        url += '?' + queryParams;\r\n      } else if (url.indexOf('?') === url.length - 1) {\r\n        url += queryParams;\r\n      } else {\r\n        url += '&' + queryParams;\r\n      }\r\n    }\r\n    return url;\r\n  }\r\n\r\n  /**\r\n   * creates query string\r\n   * @param item \r\n   */\r\n  private queryStringBuilder(item: NavigationLink) {\r\n    const ret = [];\r\n    for (let d in item.queryParams) {\r\n      ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(item.queryParams[d]));\r\n    }\r\n    return ret.join('&');\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./side-navigation.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<nav>\r\n    <ul class=\"usa-sidenav\">\r\n        <li *ngFor=\"let link of model.navigationLinks\" class=\"sidenav__item\">\r\n            <ng-container [ngTemplateOutlet]=\"sideNavLinkTemplate\" [ngTemplateOutletContext]=\"{$implicit:link}\">\r\n            </ng-container>\r\n        </li>\r\n    </ul>\r\n</nav>\r\n\r\n<ng-template #sideNavLinkTemplate let-link>\r\n    <ng-container [ngTemplateOutlet]=\"getItemTemplate(link)\" [ngTemplateOutletContext]=\"{$implicit:link}\">\r\n    </ng-container>\r\n    <ul *ngIf=\"link.children\" class=\"usa-sidenav__sublist\">\r\n        <li *ngFor=\"let link of link.children\" class=\"sidenav__item\">\r\n            <ng-container [ngTemplateOutlet]=\"sideNavLinkTemplate\" [ngTemplateOutletContext]=\"{$implicit:link}\">\r\n            </ng-container>\r\n        </li>\r\n    </ul>\r\n</ng-template>\r\n\r\n<ng-template #sideNavRouteLinkTemplate let-link>\r\n    <a [attr.class]=\"link.selected ? ' usa-current' : ''\" [routerLink]=\"[link.route]\"\r\n        [queryParams]=\"link.queryParams\"><span>{{link.text}}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #sideNavHREFLinkTemplate let-link>\r\n    <a [attr.class]=\"link.selected ? ' usa-current' : ''\" [attr.href]=\"urlBuilder(link)\"><span>{{link.text}}</span></a>\r\n</ng-template>\r\n\r\n<ng-template #sideNavLabelLinkTemplate let-link>\r\n    <span [attr.class]=\"link.selected ? ' usa-current' : ''\"><span>{{link.text}}</span></span>\r\n</ng-template>\r\n\r\n<ng-template #sideNavEVENTLinkTemplate let-link>\r\n    <a [attr.class]=\"link.selected ? ' usa-current' : ''\" href=\"javascript:void(0)\"\r\n        (click)=\"linkClickEvent(link)\"><span>{{link.text}}</span></a>\r\n</ng-template>"
        },
        {
            "name": "SdsTextChildComponent",
            "id": "component-SdsTextChildComponent-9aa77c11c4481a83421c0e121b9b5389",
            "file": "libs/packages/components/src/lib/text/child.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-text-child",
            "styleUrls": [],
            "styles": [],
            "template": "<span class=\"sds-tag sds-tag--chip\" *ngIf=\"inputtest\">\n{{inputtest}}\n</span>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "inputtest",
                    "line": 13
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\nimport { Subject } from 'rxjs';\n\n@Component({\n  selector: 'sds-text-child',\n  template: `\n  <span class=\"sds-tag sds-tag--chip\" *ngIf=\"inputtest\">\n  {{inputtest}}\n  </span>\n  `\n})\nexport class SdsTextChildComponent  {\n    @Input() inputtest;\n}\n\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsTextComponent",
            "id": "component-SdsTextComponent-ec5d86c0bc968e37b2a94f0a62def1b3",
            "file": "libs/packages/components/src/lib/text/text.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [
                {
                    "name": "{\n    provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SdsTextComponent), multi: true\n}",
                    "type": "component"
                }
            ],
            "selector": "sds-text",
            "styleUrls": [],
            "styles": [],
            "template": "<input [(ngModel)]=\"value\" class=\"usa-input\" (blur)=\"onBlur()\"/> <br/>\n <sds-text-child [inputtest]=\"value\"></sds-text-child>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "innerValue",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 21,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onChangeCallback",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 24,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "onTouchedCallback",
                    "type": "function",
                    "optional": false,
                    "description": "",
                    "line": 23,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "onBlur",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37
                },
                {
                    "name": "registerOnChange",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 47,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "registerOnTouched",
                    "args": [
                        {
                            "name": "fn",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 51,
                    "jsdoctags": [
                        {
                            "name": "fn",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "writeValue",
                    "args": [
                        {
                            "name": "value",
                            "type": "any"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 41,
                    "jsdoctags": [
                        {
                            "name": "value",
                            "type": "any",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, forwardRef } from '@angular/core';\nimport { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';\n\n\nconst noop = () => {};\n\n@Component({\n  selector: 'sds-text',\n  template: ` <input [(ngModel)]=\"value\" class=\"usa-input\" (blur)=\"onBlur()\"/>\n  <br/>\n  <sds-text-child [inputtest]=\"value\"></sds-text-child>`,\n  providers: [\n    {\n      provide: NG_VALUE_ACCESSOR,\n      useExisting: forwardRef(() => SdsTextComponent),\n      multi: true\n    }\n  ]\n})\nexport class SdsTextComponent implements ControlValueAccessor {\n   private innerValue;\n\n   private onTouchedCallback: () => {};\n   private onChangeCallback: (_: any) => {};\n\n   get value(): any {\n       return this.innerValue;\n   }\n\n   set value(v: any) {\n       if (v !== this.innerValue) {\n           this.innerValue = v;\n           this.onChangeCallback(v);\n       }\n   }\n\n   onBlur() {\n       this.onTouchedCallback();\n   }\n\n   writeValue(value: any) {\n       if (value !== this.innerValue) {\n           this.innerValue = value;\n       }\n   }\n\n   registerOnChange(fn: any) {\n       this.onChangeCallback = fn;\n   }\n\n   registerOnTouched(fn: any) {\n       this.onTouchedCallback = fn;\n   }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "implements": [
                "ControlValueAccessor"
            ],
            "accessors": {
                "value": {
                    "name": "value",
                    "setSignature": {
                        "name": "value",
                        "type": "void",
                        "args": [
                            {
                                "name": "v",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 30,
                        "jsdoctags": [
                            {
                                "name": "v",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    },
                    "getSignature": {
                        "name": "value",
                        "type": "any",
                        "returnType": "any",
                        "line": 26
                    }
                }
            }
        },
        {
            "name": "SdsToolbarComponent",
            "id": "component-SdsToolbarComponent-f585a8739de458a2d25b6bbc810e6c82",
            "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "exportAs": "sdsToolbar",
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-toolbar",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "toolbar.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "disabled",
                    "description": "<p>Whether the toolbar is disabled. </p>\n",
                    "line": 54
                },
                {
                    "name": "expanded",
                    "description": "<p>Whether the toolbar is expanded. </p>\n",
                    "line": 38,
                    "type": "any"
                },
                {
                    "name": "expandedSpace",
                    "defaultValue": "\"20px\"",
                    "line": 67,
                    "type": "string"
                },
                {
                    "name": "expandedWidth",
                    "defaultValue": "\"300px\"",
                    "description": "<p>Width of the toolbar when is expanded. </p>\n",
                    "line": 63,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "expandedChange",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "description": "<p>Emits whenever the expanded state of the toolbar changes. </p>\n",
                    "line": 34,
                    "type": "EventEmitter<boolean>"
                }
            ],
            "propertiesClass": [
                {
                    "name": "_contentId",
                    "defaultValue": "`sds-toolbar-content-${this.id}`",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the content element. Used for a11y labelling. </p>\n",
                    "line": 29,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "_disabled",
                    "defaultValue": "false",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 60,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_expanded",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 50,
                    "modifierKind": [
                        112
                    ]
                },
                {
                    "name": "_headerId",
                    "defaultValue": "`sds-toolbar-header-${this.id}`",
                    "type": "string",
                    "optional": false,
                    "description": "<p>ID for the header element. Used for a11y labelling. </p>\n",
                    "line": 26,
                    "modifierKind": [
                        132
                    ]
                },
                {
                    "name": "id",
                    "defaultValue": "uniqueId++",
                    "type": "",
                    "optional": false,
                    "description": "<p>The unique Toolbar id. </p>\n",
                    "line": 23,
                    "modifierKind": [
                        132
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_getExpandedState",
                    "args": [],
                    "optional": false,
                    "returnType": "SdsToolbarState",
                    "typeParameters": [],
                    "line": 75,
                    "description": "<p>Gets the expanded state string. </p>\n"
                },
                {
                    "name": "toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 70,
                    "description": "<p>Toggles the expanded state of the toolbar. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, EventEmitter, Input, Output } from \"@angular/core\";\r\nimport { coerceBooleanProperty } from \"@angular/cdk/coercion\";\r\nimport { sdsToolbarAnimations } from \"./toolbar-animations\";\r\n\r\n/** Toolbar's states. */\r\nexport type SdsToolbarState = \"expanded\" | \"collapsed\";\r\n\r\n/** Counter for generating unique element ids. */\r\nlet uniqueId = 0;\r\n\r\n@Component({\r\n  selector: \"sds-toolbar\",\r\n  exportAs: \"sdsToolbar\",\r\n  templateUrl: \"toolbar.component.html\",\r\n  animations: [sdsToolbarAnimations.bodyExpansion],\r\n  host: {\r\n    class: \"sds-toolbar\",\r\n    \"[class.sds-toolbar--expanded]\": \"expanded\"\r\n  }\r\n})\r\nexport class SdsToolbarComponent {\r\n  /** The unique Toolbar id. */\r\n  readonly id = uniqueId++;\r\n\r\n  /** ID for the header element. Used for a11y labelling. */\r\n  readonly _headerId: string = `sds-toolbar-header-${this.id}`;\r\n\r\n  /** ID for the content element. Used for a11y labelling. */\r\n  readonly _contentId: string = `sds-toolbar-content-${this.id}`;\r\n\r\n  constructor() {}\r\n\r\n  /** Emits whenever the expanded state of the toolbar changes. */\r\n  @Output() expandedChange: EventEmitter<boolean> = new EventEmitter<boolean>();\r\n\r\n  /** Whether the toolbar is expanded. */\r\n  @Input()\r\n  get expanded(): any {\r\n    return this._expanded;\r\n  }\r\n  set expanded(expanded: any) {\r\n    expanded = coerceBooleanProperty(expanded);\r\n\r\n    // Only emit events and update the internal value if the value changes.\r\n    if (this._expanded !== expanded) {\r\n      this._expanded = expanded;\r\n      this.expandedChange.emit(expanded);\r\n    }\r\n  }\r\n  private _expanded = false;\r\n\r\n  /** Whether the toolbar is disabled. */\r\n  @Input()\r\n  get disabled() {\r\n    return this._disabled;\r\n  }\r\n  set disabled(disabled: any) {\r\n    this._disabled = coerceBooleanProperty(disabled);\r\n  }\r\n  private _disabled: boolean = false;\r\n\r\n  /** Width of the toolbar when is expanded. */\r\n  @Input() expandedWidth: string = \"300px\";\r\n\r\n  // Elements that surround the toolbar need to make space for the expanded toolbar.\r\n  // Adding 20 more pixes to provide padding\r\n  @Input() expandedSpace: string = \"20px\";\r\n\r\n  /** Toggles the expanded state of the toolbar. */\r\n  toggle() {\r\n    this.expanded = !this.expanded;\r\n  }\r\n\r\n  /** Gets the expanded state string. */\r\n  _getExpandedState(): SdsToolbarState {\r\n    return this.expanded ? \"expanded\" : \"collapsed\";\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 29
            },
            "accessors": {
                "expanded": {
                    "name": "expanded",
                    "setSignature": {
                        "name": "expanded",
                        "type": "void",
                        "args": [
                            {
                                "name": "expanded",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 41,
                        "jsdoctags": [
                            {
                                "name": "expanded",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                },
                "disabled": {
                    "name": "disabled",
                    "setSignature": {
                        "name": "disabled",
                        "type": "void",
                        "args": [
                            {
                                "name": "disabled",
                                "type": "any"
                            }
                        ],
                        "returnType": "void",
                        "line": 57,
                        "jsdoctags": [
                            {
                                "name": "disabled",
                                "type": "any",
                                "tagName": {
                                    "text": "param"
                                }
                            }
                        ]
                    }
                }
            },
            "templateData": "<sds-toolbar-header></sds-toolbar-header>\r\n<div\r\n  class=\"sds-toolbar__content\"\r\n  role=\"region\"\r\n  [@bodyExpansion]=\"{\r\n    value: _getExpandedState(),\r\n    params: { expandedWidth: expandedWidth }\r\n  }\"\r\n  [attr.aria-labelledby]=\"_headerId\"\r\n  [id]=\"_contentId\"\r\n>\r\n  <ng-content></ng-content>\r\n</div>\r\n"
        },
        {
            "name": "SdsToolbarHeaderComponent",
            "id": "component-SdsToolbarHeaderComponent-42a976f027f538b9949960f7239bebc1",
            "file": "libs/packages/components/src/lib/toolbar/toolbar-header.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-toolbar-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "toolbar-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "toolbar",
                    "type": "SdsToolbarComponent",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "decorators": [
                        {
                            "name": "Host",
                            "stringifiedArguments": ""
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "_toggle",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 15,
                    "description": "<p>Toggles the expanded state of the toolbar. </p>\n"
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Host } from \"@angular/core\";\r\nimport { SdsToolbarComponent } from \"./toolbar.component\";\r\n\r\n@Component({\r\n  selector: \"sds-toolbar-header\",\r\n  templateUrl: \"toolbar-header.component.html\",\r\n  host: {\r\n    class: \"sds-toolbar__header\"\r\n  }\r\n})\r\nexport class SdsToolbarHeaderComponent {\r\n  constructor(@Host() public toolbar: SdsToolbarComponent) {}\r\n\r\n  /** Toggles the expanded state of the toolbar. */\r\n  _toggle() {\r\n    this.toolbar.toggle();\r\n  }\r\n\r\n  /** Gets whether the toolbar is expanded. */\r\n  get _isExpanded(): boolean {\r\n    return this.toolbar.expanded;\r\n  }\r\n\r\n  /** Whether the toolbar is disabled. */\r\n  get _disabled(): boolean {\r\n    return this.toolbar.disabled;\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "toolbar",
                        "type": "SdsToolbarComponent"
                    }
                ],
                "line": 11,
                "jsdoctags": [
                    {
                        "name": "toolbar",
                        "type": "SdsToolbarComponent",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "accessors": {
                "_isExpanded": {
                    "name": "_isExpanded",
                    "getSignature": {
                        "name": "_isExpanded",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 20,
                        "description": "<p>Gets whether the toolbar is expanded. </p>\n"
                    }
                },
                "_disabled": {
                    "name": "_disabled",
                    "getSignature": {
                        "name": "_disabled",
                        "type": "boolean",
                        "returnType": "boolean",
                        "line": 25,
                        "description": "<p>Whether the toolbar is disabled. </p>\n"
                    }
                }
            },
            "templateData": "<div class=\"sds-toolbar__toggle\">\r\n  <button\r\n    class=\"sds-toolbar__toogle-btn\"\r\n    [attr.id]=\"toolbar._headerId\"\r\n    [attr.tabindex]=\"_disabled ? -1 : 0\"\r\n    [attr.aria-controls]=\"toolbar._contentId\"\r\n    [attr.aria-expanded]=\"_isExpanded\"\r\n    [attr.aria-disabled]=\"_disabled\"\r\n    (click)=\"_toggle()\"\r\n  >\r\n    <span class=\"usa-sr-only\">Open/Close Toolbar</span>\r\n  </button>\r\n</div>\r\n"
        },
        {
            "name": "SdsTopBannerComponent",
            "id": "component-SdsTopBannerComponent-34480fcf5902e2a50fa619cc3e8b2c56",
            "file": "libs/packages/components/src/lib/top-banner/top-banner.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-top-banner",
            "styleUrls": [
                "./top-banner.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./top-banner.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "description",
                    "defaultValue": "''",
                    "line": 10
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "showDetail",
                    "defaultValue": "false",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9
                }
            ],
            "methodsClass": [
                {
                    "name": "closeDetail",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 16
                },
                {
                    "name": "toggleDetails",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\r\n\r\n@Component({\r\n  selector: 'sds-top-banner',\r\n  templateUrl: './top-banner.component.html',\r\n  styleUrls: ['./top-banner.component.scss']\r\n})\r\nexport class SdsTopBannerComponent {\r\n  showDetail = false;\r\n  @Input() description = '';\r\n\r\n  toggleDetails() {\r\n    this.showDetail = !this.showDetail;\r\n  }\r\n\r\n  closeDetail() {\r\n    if (this.showDetail) {\r\n      this.showDetail = false;\r\n    }\r\n  }\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./top-banner.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<div class=\"usa-banner\">\r\n  <div class=\"usa-accordion\">\r\n    <header\r\n      class=\"usa-banner__header\"\r\n      [class.sam-banner__header--expanded]=\"showDetail\"\r\n    >\r\n      <div class=\"usa-banner__inner\">\r\n        <div class=\"grid-col-auto\">\r\n          <span class=\"usa-banner__header-flag\"></span>\r\n        </div>\r\n        <div class=\"grid-col-fill tablet:grid-col-auto\">\r\n          <p class=\"usa-banner__header-text\">\r\n            An official website of the United States government\r\n          </p>\r\n          <p class=\"usa-banner__header-action\" aria-hidden=\"true\">\r\n            Here’s how you know\r\n          </p>\r\n        </div>\r\n        <button\r\n          class=\"usa-accordion__button usa-banner__button\"\r\n          (click)=\"toggleDetails()\"\r\n          (blur)=\"closeDetail()\"\r\n          [attr.aria-expanded]=\"showDetail\"\r\n          aria-controls=\"gov-banner\"\r\n        >\r\n          <span class=\"usa-banner__button-text\">Here’s how you know</span>\r\n        </button>\r\n        <div class=\"usa-banner__header-description\">\r\n          <em>{{ description }}</em>\r\n        </div>\r\n      </div>\r\n    </header>\r\n    <div\r\n      class=\"usa-banner__content usa-accordion__content\"\r\n      id=\"gov-banner\"\r\n      [hidden]=\"!showDetail\"\r\n    >\r\n      <div class=\"grid-row grid-gap-lg\">\r\n        <div class=\"usa-banner__guidance tablet:grid-col-6\">\r\n          <span class=\"usa-banner__icon usa-media-block__img\"></span>\r\n          <div class=\"usa-media-block__body\">\r\n            <p>\r\n              <strong>The .gov means it’s official.</strong> <br />\r\n              Federal government websites often end in .gov or .mil. Before\r\n              sharing sensitive information, make sure you’re on a federal\r\n              government site.\r\n            </p>\r\n          </div>\r\n        </div>\r\n        <div class=\"usa-banner__guidance tablet:grid-col-6\">\r\n          <span class=\"usa-banner__icon usa-media-block__img\"></span>\r\n          <div class=\"usa-media-block__body\">\r\n            <p>\r\n              <strong>The site is secure.</strong> <br />\r\n              The <strong>https://</strong> ensures that you are connecting to\r\n              the official website and that any information you provide is\r\n              encrypted and transmitted securely.\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
        },
        {
            "name": "SdsTruncatedTextContainerComponent",
            "id": "component-SdsTruncatedTextContainerComponent-5540e28b3ba6948df916a073aff558bd",
            "file": "libs/packages/components/src/lib/truncate-text/truncate-text-container.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-truncated-text-container",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "type": "SdsTruncateTextData",
                    "optional": false,
                    "description": "",
                    "line": 19,
                    "decorators": [
                        {
                            "name": "Inject",
                            "stringifiedArguments": "SDS_TRUNCATED_TEXT_DATA"
                        }
                    ],
                    "modifierKind": [
                        114
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "resetAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 27,
                    "description": "<p>Resets the animation to its initial state. </p>\n"
                },
                {
                    "name": "startAnimation",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 22,
                    "description": "<p>Starts the animation. </p>\n"
                }
            ],
            "hostBindings": [
                {
                    "name": "@container",
                    "defaultValue": "'void'",
                    "line": 17
                }
            ],
            "hostListeners": [
                {
                    "name": "@container.done",
                    "args": [],
                    "argsDecorator": [],
                    "description": "<p>Intentionally left empty to trigger change detection </p>\n",
                    "line": 33
                }
            ],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Inject, HostBinding, HostListener } from '@angular/core';\r\nimport { SDS_TRUNCATED_TEXT_DATA } from './truncates-text-base';\r\nimport { sdsTruncateTextAnimations } from './truncate-text-animations';\r\n\r\nexport interface SdsTruncateTextData {\r\n  text: string;\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-truncated-text-container',\r\n  template: `\r\n    <div class=\"sds-overlay maxw-mobile radius-overlay padding-2\">{{ data.text }}</div>\r\n  `,\r\n  animations: [sdsTruncateTextAnimations.container]\r\n})\r\nexport class SdsTruncatedTextContainerComponent {\r\n  @HostBinding('@container') _animationState = 'void';\r\n\r\n  constructor(@Inject(SDS_TRUNCATED_TEXT_DATA) public data: SdsTruncateTextData) {}\r\n\r\n  /** Starts the animation. */\r\n  startAnimation() {\r\n    this._animationState = 'enter';\r\n  }\r\n\r\n  /** Resets the animation to its initial state. */\r\n  resetAnimation() {\r\n    this._animationState = 'void';\r\n  }\r\n\r\n  /** Intentionally left empty to trigger change detection */\r\n  @HostListener('@container.done')\r\n  _onAnimationDone() {}\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsTruncateTextData"
                    }
                ],
                "line": 17,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsTruncateTextData",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            }
        },
        {
            "name": "SdsVideoPlayerComponent",
            "id": "component-SdsVideoPlayerComponent-f7322da02d1e2bd076eb1bdf5afbd29c",
            "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-video-player",
            "styleUrls": [
                "./css/px-video.css"
            ],
            "styles": [],
            "templateUrl": [
                "./video-player.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "VPConfiguration",
                    "line": 27,
                    "type": "VPInterface"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "config",
                    "type": "InitPxVideoConfig",
                    "optional": false,
                    "description": "",
                    "line": 28,
                    "modifierKind": [
                        112
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngAfterViewInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 30
                }
            ],
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "",
            "type": "component",
            "sourceCode": "import { Component, Input, AfterViewInit, ViewEncapsulation } from '@angular/core';\r\nimport { GLOBAL_STRINGS } from 'accessible-html5-video-player/js/strings.js';\r\nimport * as InitPxVideo from 'accessible-html5-video-player/js/px-video.js';\r\nimport { VPInterface } from './video-player';\r\n\r\ninterface InitPxVideoConfig {\r\n  \"videoId\": string,\r\n  \"captionsOnDefault\": boolean,\r\n  \"seekInterval\": number,\r\n  \"videoTitle\": string,\r\n  \"debug\": boolean\r\n}\r\n\r\ndeclare const GLOBAL_STRINGS: any;\r\n\r\ndeclare class InitPxVideo {\r\n  constructor(config: InitPxVideoConfig);\r\n}\r\n\r\n@Component({\r\n  selector: 'sds-video-player',\r\n  templateUrl: './video-player.component.html',\r\n  styleUrls: ['./css/px-video.css'],\r\n  encapsulation: ViewEncapsulation.None\r\n})\r\nexport class SdsVideoPlayerComponent implements AfterViewInit {\r\n  @Input() VPConfiguration: VPInterface;\r\n  private config: InitPxVideoConfig;\r\n\r\n  ngAfterViewInit() {\r\n    this.config = {\r\n      videoId: this.VPConfiguration.id,\r\n      captionsOnDefault: false,\r\n      seekInterval: this.VPConfiguration.seekInterval,\r\n      videoTitle: 'Video Player',\r\n      debug: this.VPConfiguration.debug\r\n    }\r\n\r\n    new InitPxVideo(this.config);\r\n  }\r\n\r\n  constructor() {\r\n}\r\n\r\n}\r\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "/* utilities */\r\n.pull-left {\r\n  float: left;\r\n}\r\n.sr-only {\r\n  position: absolute !important;\r\n  clip: rect(1px, 1px, 1px, 1px);\r\n  padding: 0 !important;\r\n  border: 0 !important;\r\n  height: 1px !important;\r\n  width: 1px !important;\r\n  overflow: hidden;\r\n}\r\n.hide {\r\n  display: none;\r\n}\r\n.show-inline {\r\n  display: inline-block;\r\n}\r\n\r\n/* containers */\r\n.px-video-img-captions-container * {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.px-video-img-captions-container {\r\n  position: relative;\r\n}\r\n\r\n/* progress indicator */\r\n.px-video-progress {\r\n  width: 100%;\r\n  height: 10px;\r\n}\r\n.px-video-progress[value] {\r\n  /* Reset the default appearance */\r\n  -webkit-appearance: none;\r\n  border: none;\r\n}\r\n.px-video-progress[value]::-webkit-progress-bar {\r\n  background-color: #e6e6e6;\r\n}\r\n.px-video-progress[value]::-webkit-progress-value {\r\n  background-color: #009cdf;\r\n}\r\n\r\n/* time */\r\n.px-video-time {\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  float: right;\r\n  margin-top: 2px;\r\n  font-size: 14px;\r\n}\r\n\r\n/* caption area */\r\n.px-video-captions {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  padding: 0.5em;\r\n  min-height: 2.5em;\r\n  background-color: #000;\r\n  color: #fff;\r\n  font-size: 1.1em;\r\n  text-align: center;\r\n  opacity: 0.75;\r\n}\r\n\r\n/* buttons */\r\n.px-video-controls button {\r\n  border: 1px #fff solid;\r\n  background: transparent;\r\n  padding: 0;\r\n  margin: 0 5px;\r\n  width: 25px;\r\n  height: 20px;\r\n  overflow: hidden;\r\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\r\n}\r\n.px-video-controls button:focus {\r\n  border: 1px #999 dotted;\r\n  outline: none;\r\n}\r\n.px-video-controls button {\r\n  cursor: pointer;\r\n}\r\n\r\n/* restart button */\r\n.px-video-controls button.px-video-restart {\r\n  background-position: -6px -333px;\r\n  margin-left: 0;\r\n}\r\n.px-video-controls button.px-video-restart:hover,\r\n.px-video-controls button.px-video-restart:focus {\r\n  background-position: -6px -297px;\r\n}\r\n\r\n/* rewind button */\r\n.px-video-controls button.px-video-rewind {\r\n  background-position: -6px -189px;\r\n}\r\n.px-video-controls button.px-video-rewind:hover,\r\n.px-video-controls button.px-video-rewind:focus {\r\n  background-position: -6px -153px;\r\n}\r\n\r\n/* play button */\r\n.px-video-controls button.px-video-play {\r\n  background-position: -6px -45px;\r\n}\r\n.px-video-controls button.px-video-play:hover,\r\n.px-video-controls button.px-video-play:focus {\r\n  background-position: -6px -9px;\r\n}\r\n\r\n/* pause button */\r\n.px-video-controls button.px-video-pause {\r\n  background-position: -6px -117px;\r\n}\r\n.px-video-controls button.px-video-pause:hover,\r\n.px-video-controls button.px-video-pause:focus {\r\n  background-position: -6px -81px;\r\n}\r\n\r\n/* forward button */\r\n.px-video-controls button.px-video-forward {\r\n  background-position: -6px -261px;\r\n}\r\n.px-video-controls button.px-video-forward:hover,\r\n.px-video-controls button.px-video-forward:focus {\r\n  background-position: -6px -225px;\r\n}\r\n\r\n.px-video-fullscreen-btn-container label {\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\r\n  background-position: -6px -907px;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -943px;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:hover + label {\r\n  background-position: -6px -943px;\r\n  cursor: pointer;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -943px;\r\n}\r\n.px-video-fullscreen-btn-container input[type=\"checkbox\"]:checked + label {\r\n  background-position: -6px -979px;\r\n}\r\n.px-video-fullscreen-btn-container\r\n  input[type=\"checkbox\"]:checked:hover\r\n  + label {\r\n  background-position: -6px -1015px;\r\n}\r\n\r\n/* captions button */\r\n.px-video-captions-btn-container label {\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 20px;\r\n  margin-left: 10px;\r\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\r\n  background-position: -6px -835px;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -799px;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:hover + label {\r\n  background-position: -6px -799px;\r\n  cursor: pointer;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -799px;\r\n}\r\n.px-video-captions-btn-container input[type=\"checkbox\"]:checked + label {\r\n  background-position: -6px -871px;\r\n}\r\n\r\n/* mute button */\r\n.px-video-mute-btn-container label {\r\n  display: inline-block;\r\n  width: 25px;\r\n  height: 20px;\r\n  margin-left: 240px;\r\n  margin-top: 2px;\r\n  background: no-repeat url(\"../images/px-video-sprite.svg\");\r\n  background-position: -6px -476px;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -440px;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:hover + label {\r\n  background-position: -6px -440px;\r\n  cursor: pointer;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:focus + label {\r\n  outline: 1px #999 dotted;\r\n  background-position: -6px -440px;\r\n}\r\n/* checked state of mute button */\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked + label {\r\n  background-position: -6px -692px;\r\n}\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked:hover + label,\r\n.px-video-mute-btn-container input[type=\"checkbox\"]:checked:focus + label {\r\n  background-position: -6px -656px;\r\n}\r\n\r\n/* volume range input */\r\n.px-video-controls input[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n  height: 6px;\r\n  width: 100px;\r\n  margin-top: 8px;\r\n  background-color: #e6e6e6;\r\n  outline: none;\r\n}\r\n.px-video-controls input[type=\"range\"]:focus::-webkit-slider-thumb {\r\n  outline: 1px #999 dotted;\r\n}\r\n.px-video-controls input[type=\"range\"]::-moz-range-track {\r\n  -moz-appearance: none;\r\n  height: 6px;\r\n  background-color: #e6e6e6;\r\n  border: none;\r\n}\r\n.px-video-controls input[type=\"range\"]::-webkit-slider-thumb {\r\n  -webkit-appearance: none !important;\r\n  height: 10px;\r\n  width: 6px;\r\n  background-color: #666;\r\n}\r\n.px-video-controls input[type=\"range\"]::-moz-range-thumb {\r\n  height: 12px;\r\n  width: 8px;\r\n  background-color: #666;\r\n}\r\n/* fixing display for IE10+ */\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .px-video-controls input[type=\"range\"] {\r\n    position: relative;\r\n    padding: 0;\r\n    height: 8px;\r\n    top: -3px;\r\n  }\r\n  .px-video-time {\r\n    margin-top: 4px;\r\n  }\r\n  .px-video-captions {\r\n    padding: 8px;\r\n    min-height: 36px;\r\n  }\r\n}\r\n\r\n.px-video-container {\r\n  position: relative;\r\n}\r\n.px-video-container.fullscreen {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  -webkit-cursor-visibility: auto-hide;\r\n}\r\n\r\n/* Fullscreen styles */\r\n\r\n/* style applied through js */\r\n.px-video-controls.js-fullscreen-controls {\r\n  position: absolute;\r\n  bottom: 0;\r\n  width: 100%;\r\n  z-index: 940;\r\n  background: white;\r\n}\r\n\r\n.px-video-captions.js-fullscreen-captions {\r\n  min-height: 3.5em;\r\n  font-size: 2.5em;\r\n  padding: 1em;\r\n}\r\n\r\n.px-timetip {\r\n  padding: 5px 10px;\r\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  font-size: 14px;\r\n  background: rgba(0, 0, 0, 0.83);\r\n  border-radius: 3px;\r\n  color: #fff;\r\n  width: auto;\r\n}\r\n.px-timetip:after {\r\n  top: 100%;\r\n  left: 50%;\r\n  border: solid transparent;\r\n  content: \" \";\r\n  height: 0;\r\n  width: 0;\r\n  position: absolute;\r\n  pointer-events: none;\r\n  border-color: rgba(43, 43, 43, 0);\r\n  border-top-color: #2b2b2b;\r\n  border-width: 10px;\r\n  margin-left: -10px;\r\n}\r\n",
                    "styleUrl": "./css/px-video.css"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "args": [],
                "line": 40
            },
            "implements": [
                "AfterViewInit"
            ],
            "templateData": "<div class=\"px-video-container\" id=\"{{VPConfiguration.id}}\" [style.width.px]=\"VPConfiguration.width\" >\r\n  <div class=\"px-video-img-captions-container\" >\r\n      <div class=\"px-video-captions hide\" aria-hidden=\"true\"></div>\r\n      <video width=\"{{VPConfiguration.width}}\" height=\"{{VPConfiguration.height}}\" poster=\"{{VPConfiguration.poster}}\" controls preload={{VPConfiguration.preload}}>\r\n        <!-- if Safari/Chrome-->\r\n          <source src=\"{{VPConfiguration.sourceMp4}}\" type=\"video/mp4\" />\r\n          <!-- If Firefox/Opera/Chrome/IE -->\r\n          <source src=\"{{VPConfiguration.sourceWebm}}\" type=\"video/webm\" />\r\n          <track kind=\"subtitles\" kind=\"captions\" label=\"English captions\" src=\"{{VPConfiguration.caption}}\" srclang=\"en\" default />\r\n      </video>\r\n  </div>\r\n  <div class=\"px-video-controls\"></div>\r\n</div>\r\n"
        }
    ],
    "modules": [
        {
            "name": "PaginationModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "PaginationComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "PaginationComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsAccordionModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsAccordionDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionItemContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemHeaderComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsAccordionDirective"
                        },
                        {
                            "name": "SdsAccordionItemComponent"
                        },
                        {
                            "name": "SdsAccordionItemContentDirective"
                        },
                        {
                            "name": "SdsAccordionItemHeaderComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsAutocompleteModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSAutocompleteComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsAutocompleteSearchModule"
                        },
                        {
                            "name": "SdsSelectedResultsModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSAutocompleteComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsAutocompleteSearchModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSAutocompleteSearchComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SDSClickOutsideModule"
                        },
                        {
                            "name": "SdsTabOutsideModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSAutocompleteSearchComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SDSClickOutsideModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSClickOutsideDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSClickOutsideDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsCollapseModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "CollapseDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "CollapseDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsDialogModule",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDialogService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDialogActionsDirective"
                        },
                        {
                            "name": "SdsDialogCloseDirective"
                        },
                        {
                            "name": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "SdsDialogContentDirective"
                        },
                        {
                            "name": "SdsDialogSubtitleDirective"
                        },
                        {
                            "name": "SdsDialogTitleDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsDialogActionsDirective"
                        },
                        {
                            "name": "SdsDialogCloseDirective"
                        },
                        {
                            "name": "SdsDialogContainerComponent"
                        },
                        {
                            "name": "SdsDialogContentDirective"
                        },
                        {
                            "name": "SdsDialogSubtitleDirective"
                        },
                        {
                            "name": "SdsDialogTitleDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsDirectivesModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "ExternalLinkDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "ExternalLinkDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsFooterModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsFooterComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsCollapseModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsFooterComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsHeaderModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsHeaderComponent"
                        },
                        {
                            "name": "SdsTopBannerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsHeaderComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsMenuModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsMenuComponent"
                        },
                        {
                            "name": "SdsMenuHeaderComponent"
                        },
                        {
                            "name": "SdsMenuItemComponent"
                        },
                        {
                            "name": "SdsMenuTriggerForDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsMenuComponent"
                        },
                        {
                            "name": "SdsMenuHeaderComponent"
                        },
                        {
                            "name": "SdsMenuItemComponent"
                        },
                        {
                            "name": "SdsMenuTriggerForDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsObserversModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsObserveWidthDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsObserveWidthDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsPageModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsPageComponent"
                        },
                        {
                            "name": "SdsPageOptionsComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsPageComponent"
                        },
                        {
                            "name": "SdsPageOptionsComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsPopupModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsPopupDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsPopupDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsSearchModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSearchComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsSearchComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsSearchResultListModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSearchResultListComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsSearchResultListComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsSelectedResultsModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSSelectedResultComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSSelectedResultComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsSideNavigationModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSideNavigationComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsAccordionModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsSideNavigationComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsTabOutsideModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SDSTabOutsideDirective"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SDSTabOutsideDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsTextModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTextChildComponent"
                        },
                        {
                            "name": "SdsTextComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsTextChildComponent"
                        },
                        {
                            "name": "SdsTextComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsToolbarModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsToolbarComponent"
                        },
                        {
                            "name": "SdsToolbarExpandDirective"
                        },
                        {
                            "name": "SdsToolbarHeaderComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsToolbarComponent"
                        },
                        {
                            "name": "SdsToolbarExpandDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsTruncateModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsTruncateTextByLineDirective"
                        },
                        {
                            "name": "SdsTruncatedTextContainerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsTruncateTextByLineDirective"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        },
        {
            "name": "SdsVideoPlayerModule",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsVideoPlayerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsVideoPlayerComponent"
                        }
                    ]
                },
                {
                    "type": "bootstrap",
                    "elements": []
                },
                {
                    "type": "classes",
                    "elements": []
                }
            ]
        }
    ],
    "miscellaneous": {
        "variables": [
            {
                "name": "ACCORDION_ITEM_ANIMATION_TIMING",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                "type": "string",
                "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                "description": "<p>Time and timing curve for accordion item animations. </p>\n"
            },
            {
                "name": "animationBody",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                "type": "[]",
                "defaultValue": "[\r\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\r\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\r\n  // decimate the animation performance. Leaving it as `none` solves both issues.\r\n  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),\r\n  state('enter', style({transform: 'none'})),\r\n  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',\r\n      style({transform: 'none', opacity: 1}))),\r\n  transition('* => void, * => exit',\r\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),\r\n]"
            },
            {
                "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
                "type": "any",
                "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\r\n  multi: true\r\n}"
            },
            {
                "name": "Autocomplete_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
                "type": "any",
                "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\r\n  multi: true\r\n}"
            },
            {
                "name": "ChromeFirefoxMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 13,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13,\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "context",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/test.ts",
                "type": "",
                "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
            },
            {
                "name": "dialogElementUid",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter used to generate unique IDs for dialog elements. </p>\n"
            },
            {
                "name": "EdgeMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "GLOBAL_STRINGS",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
                "type": "any"
            },
            {
                "name": "IEMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Spacebar',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "mocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  ie: IEMocks,\r\n  edge: EdgeMocks,\r\n  default: ChromeFirefoxMocks,\r\n  safari: SafariMocks\r\n}"
            },
            {
                "name": "noop",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/text/text.component.ts",
                "type": "",
                "defaultValue": "() => {}"
            },
            {
                "name": "require",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/test.ts",
                "type": "any"
            },
            {
                "name": "SafariMocks",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                "type": "object",
                "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: 'Enter',\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: 'Up',\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: 'Down',\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: 'Left',\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: 'Right',\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: 'U+0009',\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: 'U+001B',\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: 'U+0020',\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: 'Shift',\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: 'U+0008',\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: 'U+007F',\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
            },
            {
                "name": "SDS_ACCORDION",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
                "description": "<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
            },
            {
                "name": "SDS_DIALOG_DATA",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<any>('SdsDialogData')",
                "description": "<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n"
            },
            {
                "name": "SDS_DIALOG_DEFAULT_OPTIONS",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
                "description": "<p>Injection token that can be used to specify default dialog options. </p>\n"
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "",
                "defaultValue": "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
                "description": "<p>Injection token that determines the scroll handling while the dialog is open. </p>\n"
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "type": "object",
                "defaultValue": "{\r\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\r\n  deps: [Overlay],\r\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\r\n}"
            },
            {
                "name": "SDS_MENU_TOKEN",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "type": "",
                "defaultValue": "new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n)",
                "description": "<p>Injection token used to provide the parent menu to menu items. </p>\n"
            },
            {
                "name": "SDS_SelectedResult_VALUE_ACCESSOR",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
                "type": "any",
                "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\r\n  multi: true\r\n}"
            },
            {
                "name": "SDS_TRUNCATED_TEXT_DATA",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts",
                "type": "",
                "defaultValue": "new InjectionToken<any>(\r\n  'SdsTruncatedTextData'\r\n)",
                "description": "<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
            },
            {
                "name": "sdsDialogAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  /** Animation that is applied on the dialog container by defalt. */\r\n  dialogContainer: trigger('dialogContainer', animationBody),\r\n}",
                "description": "<p>Animations used by SdsDialog.</p>\n"
            },
            {
                "name": "sdsExpansionAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\r\n    state('expanded', style({height: '*', visibility: 'visible'})),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\r\n  ])\r\n}"
            },
            {
                "name": "sdsMenuAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/menu/menu-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  transformMenu: trigger('transformMenu', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-menu',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
            },
            {
                "name": "sdsToolbarAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),\r\n    state('expanded', style({width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible'}), {\r\n      params: { expandedWidth: '300px' }\r\n    }),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(TOOLBAR_ANIMATION_TIMING)),\r\n  ])\r\n}"
            },
            {
                "name": "sdsTruncateTextAnimations",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts",
                "type": "literal type",
                "defaultValue": "{\r\n  container: trigger('container', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-overlay',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
            },
            {
                "name": "TOOLBAR_ANIMATION_TIMING",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                "type": "string",
                "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                "description": "<p>Time and timing curve for accordion item animations. </p>\n"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter for generating unique element ids. </p>\n"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
                "type": "number",
                "defaultValue": "0"
            },
            {
                "name": "uniqueId",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                "type": "number",
                "defaultValue": "0",
                "description": "<p>Counter for generating unique element ids. </p>\n"
            }
        ],
        "functions": [
            {
                "name": "_applyConfigDefaults",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Applies default options to the dialog config.</p>\n",
                "args": [
                    {
                        "name": "config",
                        "optional": true
                    },
                    {
                        "name": "defaultOptions",
                        "optional": true
                    }
                ],
                "returnType": "SdsDialogConfig",
                "jsdoctags": [
                    {
                        "name": {
                            "pos": 14481,
                            "end": 14487,
                            "flags": 0,
                            "escapedText": "config"
                        },
                        "optional": true,
                        "tagName": {
                            "pos": 14475,
                            "end": 14480,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Config to be modified.</p>\n"
                    },
                    {
                        "name": {
                            "pos": 14522,
                            "end": 14536,
                            "flags": 0,
                            "escapedText": "defaultOptions"
                        },
                        "optional": true,
                        "tagName": {
                            "pos": 14516,
                            "end": 14521,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Default options provided.</p>\n"
                    },
                    {
                        "tagName": {
                            "pos": 14568,
                            "end": 14575,
                            "flags": 0,
                            "escapedText": "returns"
                        },
                        "comment": "<p>The new configuration object.</p>\n"
                    }
                ]
            },
            {
                "name": "createFakeEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Creates a fake event object with any desired event type. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "canBubble",
                        "type": ""
                    },
                    {
                        "name": "cancelable",
                        "type": ""
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "canBubble",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "cancelable",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createKeyboardEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Dispatches a keydown event from an element. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "keyCode"
                    },
                    {
                        "name": "target",
                        "optional": true
                    },
                    {
                        "name": "key",
                        "optional": true
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "keyCode",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "target",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "key",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createMouseEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    },
                    {
                        "name": "button",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "button",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "createTouchEvent",
                "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n",
                "args": [
                    {
                        "name": "type"
                    },
                    {
                        "name": "pageX",
                        "type": "number"
                    },
                    {
                        "name": "pageY",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "pageX",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "pageY",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Utility to dispatch any event on a Node. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "event"
                    }
                ],
                "returnType": "Event",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "event",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchFakeEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a fake event on a specified node. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "canBubble",
                        "type": "boolean",
                        "optional": true
                    }
                ],
                "returnType": "Event",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "canBubble",
                        "type": "boolean",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchKeyboardEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "keyCode"
                    },
                    {
                        "name": "target",
                        "optional": true
                    }
                ],
                "returnType": "KeyboardEvent",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "keyCode",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "target",
                        "optional": true,
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchMouseEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    },
                    {
                        "name": "event",
                        "type": ""
                    }
                ],
                "returnType": "MouseEvent",
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "event",
                        "type": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "dispatchTouchEvent",
                "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n",
                "args": [
                    {
                        "name": "node"
                    },
                    {
                        "name": "type"
                    },
                    {
                        "name": "x",
                        "type": "number"
                    },
                    {
                        "name": "y",
                        "type": "number"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "node",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "type",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "x",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "y",
                        "type": "number",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "getClosestDialog",
                "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n",
                "args": [
                    {
                        "name": "element"
                    },
                    {
                        "name": "openDialogs"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": {
                            "pos": 4042,
                            "end": 4049,
                            "flags": 0,
                            "escapedText": "element"
                        },
                        "tagName": {
                            "pos": 4036,
                            "end": 4041,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>Element relative to which to look for a dialog.</p>\n"
                    },
                    {
                        "name": {
                            "pos": 4109,
                            "end": 4120,
                            "flags": 0,
                            "escapedText": "openDialogs"
                        },
                        "tagName": {
                            "pos": 4103,
                            "end": 4108,
                            "flags": 0,
                            "escapedText": "param"
                        },
                        "comment": "<p>References to the currently-open dialogs.</p>\n"
                    }
                ]
            },
            {
                "name": "patchElementFocus",
                "file": "libs/packages/components/src/lib/testing/element-focus.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n",
                "args": [
                    {
                        "name": "element"
                    }
                ],
                "jsdoctags": [
                    {
                        "name": "element",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_FACTORY",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "overlay"
                    }
                ],
                "returnType": "ScrollStrategy",
                "jsdoctags": [
                    {
                        "name": "overlay",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY",
                "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "",
                "args": [
                    {
                        "name": "overlay"
                    }
                ],
                "returnType": "ScrollStrategy",
                "jsdoctags": [
                    {
                        "name": "overlay",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            {
                "name": "throwSdsDialogContentAlreadyAttachedError",
                "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
                "ctype": "miscellaneous",
                "subtype": "function",
                "description": "<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n",
                "args": []
            }
        ],
        "typealiases": [
            {
                "name": "DialogRole",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"dialog\" | \"alertdialog\"",
                "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
                "description": "<p>Valid ARIA roles for a dialog element. </p>\n",
                "kind": 168
            },
            {
                "name": "MenuPositionX",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"before\" | \"after\"",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "<p>Menu Positions </p>\n",
                "kind": 168
            },
            {
                "name": "MenuPositionY",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"above\" | \"below\"",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "",
                "kind": 168
            },
            {
                "name": "MenuSizes",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "",
                "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                "description": "<p>Menu available sizes </p>\n",
                "kind": 177
            },
            {
                "name": "SdsAccordionDisplayMode",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"default\" | \"basic\"",
                "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                "description": "<p>Accordion&#39;s display modes. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsAccordionItemState",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"expanded\" | \"collapsed\"",
                "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                "description": "<p>Accordion Item&#39;s states. </p>\n",
                "kind": 168
            },
            {
                "name": "SdsToolbarState",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "\"expanded\" | \"collapsed\"",
                "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                "description": "<p>Toolbar&#39;s states. </p>\n",
                "kind": 168
            }
        ],
        "enumerations": [
            {
                "name": "KEYS",
                "childs": [
                    {
                        "name": "ENTER",
                        "value": "enter"
                    },
                    {
                        "name": "UP",
                        "value": "up"
                    },
                    {
                        "name": "DOWN",
                        "value": "down"
                    },
                    {
                        "name": "LEFT",
                        "value": "left"
                    },
                    {
                        "name": "RIGHT",
                        "value": "right"
                    },
                    {
                        "name": "TAB",
                        "value": "tab"
                    },
                    {
                        "name": "ESC",
                        "value": "esc"
                    },
                    {
                        "name": "SPACE",
                        "value": "space"
                    },
                    {
                        "name": "SHIFT",
                        "value": "shift"
                    },
                    {
                        "name": "BACKSPACE",
                        "value": "backspace"
                    },
                    {
                        "name": "ONE",
                        "value": "1"
                    },
                    {
                        "name": "TWO",
                        "value": "2"
                    },
                    {
                        "name": "THREE",
                        "value": "3"
                    },
                    {
                        "name": "FOUR",
                        "value": "4"
                    },
                    {
                        "name": "FIVE",
                        "value": "5"
                    },
                    {
                        "name": "SIX",
                        "value": "6"
                    },
                    {
                        "name": "SEVEN",
                        "value": "7"
                    },
                    {
                        "name": "EIGHT",
                        "value": "8"
                    },
                    {
                        "name": "NINE",
                        "value": "9"
                    },
                    {
                        "name": "ZERO",
                        "value": "0"
                    },
                    {
                        "name": "DELETE",
                        "value": "delete"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/key-helper/key-helper.ts"
            },
            {
                "name": "NavigationMode",
                "childs": [
                    {
                        "name": "INTERNAL"
                    },
                    {
                        "name": "EXTERNAL"
                    },
                    {
                        "name": "EVENT"
                    },
                    {
                        "name": "LABEL"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts"
            },
            {
                "name": "SelectionMode",
                "childs": [
                    {
                        "name": "SINGLE"
                    },
                    {
                        "name": "MULTIPLE"
                    }
                ],
                "ctype": "miscellaneous",
                "subtype": "enum",
                "description": "",
                "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts"
            }
        ],
        "groupedVariables": {
            "libs/packages/components/src/lib/accordion/accordion-animations.ts": [
                {
                    "name": "ACCORDION_ITEM_ANIMATION_TIMING",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                    "type": "string",
                    "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                    "description": "<p>Time and timing curve for accordion item animations. </p>\n"
                },
                {
                    "name": "sdsExpansionAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({height: '0px', visibility: 'hidden'})),\r\n    state('expanded', style({height: '*', visibility: 'visible'})),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(ACCORDION_ITEM_ANIMATION_TIMING)),\r\n  ])\r\n}"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-animations.ts": [
                {
                    "name": "animationBody",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                    "type": "[]",
                    "defaultValue": "[\r\n  // Note: The `enter` animation transitions to `transform: none`, because for some reason\r\n  // specifying the transform explicitly, causes IE both to blur the dialog content and\r\n  // decimate the animation performance. Leaving it as `none` solves both issues.\r\n  state('void, exit', style({opacity: 0, transform: 'scale(0.7)'})),\r\n  state('enter', style({transform: 'none'})),\r\n  transition('* => enter', animate('150ms cubic-bezier(0, 0, 0.2, 1)',\r\n      style({transform: 'none', opacity: 1}))),\r\n  transition('* => void, * => exit',\r\n      animate('75ms cubic-bezier(0.4, 0.0, 0.2, 1)', style({opacity: 0}))),\r\n]"
                },
                {
                    "name": "sdsDialogAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  /** Animation that is applied on the dialog container by defalt. */\r\n  dialogContainer: trigger('dialogContainer', animationBody),\r\n}",
                    "description": "<p>Animations used by SdsDialog.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts": [
                {
                    "name": "Autocomplete_Autocomplete_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete-search/autocomplete-search.component.ts",
                    "type": "any",
                    "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteSearchComponent),\r\n  multi: true\r\n}"
                }
            ],
            "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts": [
                {
                    "name": "Autocomplete_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/autocomplete/autocomplete.component.ts",
                    "type": "any",
                    "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSAutocompleteComponent),\r\n  multi: true\r\n}"
                }
            ],
            "libs/packages/components/src/lib/key-helper/key-mocks.ts": [
                {
                    "name": "ChromeFirefoxMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 13,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13,\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                },
                {
                    "name": "EdgeMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                },
                {
                    "name": "IEMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: undefined,\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Up',\r\n    keyCode: 38,\r\n    keyIdentifier: undefined,\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Down',\r\n    keyCode: 40,\r\n    keyIdentifier: undefined,\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Left',\r\n    keyCode: 37,\r\n    keyIdentifier: undefined,\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Right',\r\n    keyCode: 39,\r\n    keyIdentifier: undefined,\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: undefined,\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Esc',\r\n    keyCode: 27,\r\n    keyIdentifier: undefined,\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Spacebar',\r\n    keyCode: 32,\r\n    keyIdentifier: undefined,\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: undefined,\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: undefined,\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: undefined,\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: undefined,\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                },
                {
                    "name": "mocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  ie: IEMocks,\r\n  edge: EdgeMocks,\r\n  default: ChromeFirefoxMocks,\r\n  safari: SafariMocks\r\n}"
                },
                {
                    "name": "SafariMocks",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/key-helper/key-mocks.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  enter: {\r\n    charCode: 0,\r\n    code: 'Enter',\r\n    key: 'Enter',\r\n    keyCode: 13,\r\n    keyIdentifier: 'Enter',\r\n    which: 13\r\n  },\r\n  up: {\r\n    charCode: 0,\r\n    code: 'ArrowUp',\r\n    key: 'ArrowUp',\r\n    keyCode: 38,\r\n    keyIdentifier: 'Up',\r\n    which: 38\r\n  },\r\n  down: {\r\n    charCode: 0,\r\n    code: 'ArrowDown',\r\n    key: 'ArrowDown',\r\n    keyCode: 40,\r\n    keyIdentifier: 'Down',\r\n    which: 40\r\n  },\r\n  left: {\r\n    charCode: 0,\r\n    code: 'ArrowLeft',\r\n    key: 'ArrowLeft',\r\n    keyCode: 37,\r\n    keyIdentifier: 'Left',\r\n    which: 37\r\n  },\r\n  right: {\r\n    charCode: 0,\r\n    code: 'ArrowRight',\r\n    key: 'ArrowRight',\r\n    keyCode: 39,\r\n    keyIdentifier: 'Right',\r\n    which: 39\r\n  },\r\n  tab: {\r\n    charCode: 0,\r\n    code: 'Tab',\r\n    key: 'Tab',\r\n    keyCode: 9,\r\n    keyIdentifier: 'U+0009',\r\n    which: 9\r\n  },\r\n  esc: {\r\n    charCode: 0,\r\n    code: 'Escape',\r\n    key: 'Escape',\r\n    keyCode: 27,\r\n    keyIdentifier: 'U+001B',\r\n    which: 27\r\n  },\r\n  space: {\r\n    charCode: 0,\r\n    code: 'Space',\r\n    key: ' ',\r\n    keyCode: 32,\r\n    keyIdentifier: 'U+0020',\r\n    which: 32\r\n  },\r\n  shift: {\r\n    charCode: 0,\r\n    code: 'ShiftLeft',\r\n    key: 'Shift',\r\n    keyCode: 16,\r\n    keyIdentifier: 'Shift',\r\n    which: 16\r\n  },\r\n  backspace: {\r\n    charCode: 0,\r\n    code: 'Backspace',\r\n    key: 'Backspace',\r\n    keyCode: 8,\r\n    keyIdentifier: 'U+0008',\r\n    which: 8\r\n  },\r\n  delete: {\r\n    charCode: 0,\r\n    code: 'Delete',\r\n    key: 'Delete',\r\n    keyCode: 46,\r\n    keyIdentifier: 'U+007F',\r\n    which: 46\r\n  },\r\n  0: {\r\n    charCode: 0,\r\n    code: 'Digit0',\r\n    key: 0,\r\n    keyCode: 48,\r\n    keyIdentifier: 'U+0030',\r\n    which: 48\r\n  },\r\n  1: {\r\n    charCode: 0,\r\n    code: 'Digit1',\r\n    key: 1,\r\n    keyCode: 49,\r\n    keyIdentifier: 'U+0031',\r\n    which: 49\r\n  },\r\n  2: {\r\n    charCode: 0,\r\n    code: 'Digit2',\r\n    key: 2,\r\n    keyCode: 50,\r\n    keyIdentifier: 'U+0032',\r\n    which: 50\r\n  },\r\n  3: {\r\n    charCode: 0,\r\n    code: 'Digit3',\r\n    key: 3,\r\n    keyCode: 51,\r\n    keyIdentifier: 'U+0033',\r\n    which: 51\r\n  },\r\n  4: {\r\n    charCode: 0,\r\n    code: 'Digit4',\r\n    key: 4,\r\n    keyCode: 52,\r\n    keyIdentifier: 'U+0034',\r\n    which: 52\r\n  },\r\n  5: {\r\n    charCode: 0,\r\n    code: 'Digit5',\r\n    key: 5,\r\n    keyCode: 53,\r\n    keyIdentifier: 'U+0035',\r\n    which: 53\r\n  },\r\n  6: {\r\n    charCode: 0,\r\n    code: 'Digit6',\r\n    key: 6,\r\n    keyCode: 54,\r\n    keyIdentifier: 'U+0036',\r\n    which: 54\r\n  },\r\n  7: {\r\n    charCode: 0,\r\n    code: 'Digit7',\r\n    key: 7,\r\n    keyCode: 55,\r\n    keyIdentifier: 'U+0037',\r\n    which: 55\r\n  },\r\n  8: {\r\n    charCode: 0,\r\n    code: 'Digit8',\r\n    key: 8,\r\n    keyCode: 56,\r\n    keyIdentifier: 'U+0038',\r\n    which: 56\r\n  },\r\n  9: {\r\n    charCode: 0,\r\n    code: 'Digit9',\r\n    key: 9,\r\n    keyCode: 57,\r\n    keyIdentifier: 'U+0039',\r\n    which: 57\r\n  }\r\n}"
                }
            ],
            "libs/packages/components/src/test.ts": [
                {
                    "name": "context",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/test.ts",
                    "type": "",
                    "defaultValue": "require.context('./', true, /\\.spec\\.ts$/)"
                },
                {
                    "name": "require",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/test.ts",
                    "type": "any"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-content.directives.ts": [
                {
                    "name": "dialogElementUid",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter used to generate unique IDs for dialog elements. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/video-player/video-player.component.ts": [
                {
                    "name": "GLOBAL_STRINGS",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/video-player/video-player.component.ts",
                    "type": "any"
                }
            ],
            "libs/packages/components/src/lib/text/text.component.ts": [
                {
                    "name": "noop",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/text/text.component.ts",
                    "type": "",
                    "defaultValue": "() => {}"
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-base.ts": [
                {
                    "name": "SDS_ACCORDION",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsAccordionBase>('SDS_ACCORDION')",
                    "description": "<p>Token used to provide a <code>SdsAccordion</code> to <code>SdsAccordionItem</code>.\nUsed primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog.ts": [
                {
                    "name": "SDS_DIALOG_DATA",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<any>('SdsDialogData')",
                    "description": "<p>Injection token that can be used to access the data that was passed in to a dialog. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_DEFAULT_OPTIONS",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsDialogConfig>('sds-dialog-default-options')",
                    "description": "<p>Injection token that can be used to specify default dialog options. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<() => ScrollStrategy>('sds-dialog-scroll-strategy')",
                    "description": "<p>Injection token that determines the scroll handling while the dialog is open. </p>\n"
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "type": "object",
                    "defaultValue": "{\r\n  provide: SDS_DIALOG_SCROLL_STRATEGY,\r\n  deps: [Overlay],\r\n  useFactory: SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY,\r\n}"
                }
            ],
            "libs/packages/components/src/lib/menu/menu.component.ts": [
                {
                    "name": "SDS_MENU_TOKEN",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<SdsMenuInterface>(\r\n  'SDS_MENU_TOKEN'\r\n)",
                    "description": "<p>Injection token used to provide the parent menu to menu items. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/selected-result/selected-result.component.ts": [
                {
                    "name": "SDS_SelectedResult_VALUE_ACCESSOR",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/selected-result/selected-result.component.ts",
                    "type": "any",
                    "defaultValue": "{\r\n  provide: NG_VALUE_ACCESSOR,\r\n  useExisting: forwardRef(() => SDSSelectedResultComponent),\r\n  multi: true\r\n}"
                }
            ],
            "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts": [
                {
                    "name": "SDS_TRUNCATED_TEXT_DATA",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/truncate-text/truncates-text-base.ts",
                    "type": "",
                    "defaultValue": "new InjectionToken<any>(\r\n  'SdsTruncatedTextData'\r\n)",
                    "description": "<p>Used primarily to avoid circular imports between <code>SdsAccordion</code> and <code>SdsAccordionItem</code>.</p>\n"
                }
            ],
            "libs/packages/components/src/lib/menu/menu-animations.ts": [
                {
                    "name": "sdsMenuAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/menu/menu-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  transformMenu: trigger('transformMenu', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-menu',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar-animations.ts": [
                {
                    "name": "sdsToolbarAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  /** Animation that expands and collapses the accordion item content. */\r\n  bodyExpansion: trigger('bodyExpansion', [\r\n    state('collapsed, void', style({width: '0px', height: '0px', opacity: '0', visibility: 'hidden'})),\r\n    state('expanded', style({width: '{{expandedWidth}}', height: '*', opacity: '1', visibility: 'visible'}), {\r\n      params: { expandedWidth: '300px' }\r\n    }),\r\n    transition('expanded <=> collapsed, void => collapsed',\r\n      animate(TOOLBAR_ANIMATION_TIMING)),\r\n  ])\r\n}"
                },
                {
                    "name": "TOOLBAR_ANIMATION_TIMING",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar-animations.ts",
                    "type": "string",
                    "defaultValue": "'225ms cubic-bezier(0.4,0.0,0.2,1)'",
                    "description": "<p>Time and timing curve for accordion item animations. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts": [
                {
                    "name": "sdsTruncateTextAnimations",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/truncate-text/truncate-text-animations.ts",
                    "type": "literal type",
                    "defaultValue": "{\r\n  container: trigger('container', [\r\n    state(\r\n      'void',\r\n      style({\r\n        opacity: 0,\r\n        transform: 'scale(0.8)'\r\n      })\r\n    ),\r\n    transition(\r\n      'void => enter',\r\n      group([\r\n        query(\r\n          '.sds-overlay',\r\n          animate(\r\n            '100ms linear',\r\n            style({\r\n              opacity: 1\r\n            })\r\n          )\r\n        ),\r\n        animate(\r\n          '120ms cubic-bezier(0, 0, 0.2, 1)',\r\n          style({ transform: 'scale(1)' })\r\n        )\r\n      ])\r\n    ),\r\n    transition('* => void', animate('100ms 25ms linear', style({ opacity: 0 })))\r\n  ])\r\n}"
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar.component.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter for generating unique element ids. </p>\n"
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-ref.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/dialog/dialog-ref.ts",
                    "type": "number",
                    "defaultValue": "0"
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-item.component.ts": [
                {
                    "name": "uniqueId",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                    "type": "number",
                    "defaultValue": "0",
                    "description": "<p>Counter for generating unique element ids. </p>\n"
                }
            ]
        },
        "groupedFunctions": {
            "libs/packages/components/src/lib/dialog/dialog.ts": [
                {
                    "name": "_applyConfigDefaults",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Applies default options to the dialog config.</p>\n",
                    "args": [
                        {
                            "name": "config",
                            "optional": true
                        },
                        {
                            "name": "defaultOptions",
                            "optional": true
                        }
                    ],
                    "returnType": "SdsDialogConfig",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 14481,
                                "end": 14487,
                                "flags": 0,
                                "escapedText": "config"
                            },
                            "optional": true,
                            "tagName": {
                                "pos": 14475,
                                "end": 14480,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Config to be modified.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 14522,
                                "end": 14536,
                                "flags": 0,
                                "escapedText": "defaultOptions"
                            },
                            "optional": true,
                            "tagName": {
                                "pos": 14516,
                                "end": 14521,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Default options provided.</p>\n"
                        },
                        {
                            "tagName": {
                                "pos": 14568,
                                "end": 14575,
                                "flags": 0,
                                "escapedText": "returns"
                            },
                            "comment": "<p>The new configuration object.</p>\n"
                        }
                    ]
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_FACTORY",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "overlay"
                        }
                    ],
                    "returnType": "ScrollStrategy",
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "SDS_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY",
                    "file": "libs/packages/components/src/lib/dialog/dialog.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "overlay"
                        }
                    ],
                    "returnType": "ScrollStrategy",
                    "jsdoctags": [
                        {
                            "name": "overlay",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/event-objects.ts": [
                {
                    "name": "createFakeEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Creates a fake event object with any desired event type. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "canBubble",
                            "type": ""
                        },
                        {
                            "name": "cancelable",
                            "type": ""
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "canBubble",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "cancelable",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createKeyboardEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Dispatches a keydown event from an element. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "keyCode"
                        },
                        {
                            "name": "target",
                            "optional": true
                        },
                        {
                            "name": "key",
                            "optional": true
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "keyCode",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "target",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "key",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createMouseEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        },
                        {
                            "name": "button",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "button",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "createTouchEvent",
                    "file": "libs/packages/components/src/lib/testing/event-objects.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Creates a browser TouchEvent with the specified pointer coordinates. </p>\n",
                    "args": [
                        {
                            "name": "type"
                        },
                        {
                            "name": "pageX",
                            "type": "number"
                        },
                        {
                            "name": "pageY",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "pageX",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "pageY",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/dispatch-events.ts": [
                {
                    "name": "dispatchEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Utility to dispatch any event on a Node. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "event"
                        }
                    ],
                    "returnType": "Event",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchFakeEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a fake event on a specified node. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "canBubble",
                            "type": "boolean",
                            "optional": true
                        }
                    ],
                    "returnType": "Event",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "canBubble",
                            "type": "boolean",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchKeyboardEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a keyboard event with a specified key code. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "keyCode"
                        },
                        {
                            "name": "target",
                            "optional": true
                        }
                    ],
                    "returnType": "KeyboardEvent",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "keyCode",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "target",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchMouseEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a mouse event on the specified coordinates. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        },
                        {
                            "name": "event",
                            "type": ""
                        }
                    ],
                    "returnType": "MouseEvent",
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "event",
                            "type": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "dispatchTouchEvent",
                    "file": "libs/packages/components/src/lib/testing/dispatch-events.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Shorthand to dispatch a touch event on the specified coordinates. </p>\n",
                    "args": [
                        {
                            "name": "node"
                        },
                        {
                            "name": "type"
                        },
                        {
                            "name": "x",
                            "type": "number"
                        },
                        {
                            "name": "y",
                            "type": "number"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "node",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "x",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "y",
                            "type": "number",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-content.directives.ts": [
                {
                    "name": "getClosestDialog",
                    "file": "libs/packages/components/src/lib/dialog/dialog-content.directives.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Finds the closest SdsDialogRef to an element by looking at the DOM.</p>\n",
                    "args": [
                        {
                            "name": "element"
                        },
                        {
                            "name": "openDialogs"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4042,
                                "end": 4049,
                                "flags": 0,
                                "escapedText": "element"
                            },
                            "tagName": {
                                "pos": 4036,
                                "end": 4041,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>Element relative to which to look for a dialog.</p>\n"
                        },
                        {
                            "name": {
                                "pos": 4109,
                                "end": 4120,
                                "flags": 0,
                                "escapedText": "openDialogs"
                            },
                            "tagName": {
                                "pos": 4103,
                                "end": 4108,
                                "flags": 0,
                                "escapedText": "param"
                            },
                            "comment": "<p>References to the currently-open dialogs.</p>\n"
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/testing/element-focus.ts": [
                {
                    "name": "patchElementFocus",
                    "file": "libs/packages/components/src/lib/testing/element-focus.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Patches an elements focus and blur methods to emit events consistently and predictably.\nThis is necessary, because some browsers, like IE11, will call the focus handlers asynchronously,\nwhile others won&#39;t fire them at all if the browser window is not focused.</p>\n",
                    "args": [
                        {
                            "name": "element"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "element",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "libs/packages/components/src/lib/dialog/dialog-container.component.ts": [
                {
                    "name": "throwSdsDialogContentAlreadyAttachedError",
                    "file": "libs/packages/components/src/lib/dialog/dialog-container.component.ts",
                    "ctype": "miscellaneous",
                    "subtype": "function",
                    "description": "<p>Throws an exception for the case when a ComponentPortal is\nattached to a DomPortalOutlet without an origin.</p>\n",
                    "args": []
                }
            ]
        },
        "groupedEnumerations": {
            "libs/packages/components/src/lib/key-helper/key-helper.ts": [
                {
                    "name": "KEYS",
                    "childs": [
                        {
                            "name": "ENTER",
                            "value": "enter"
                        },
                        {
                            "name": "UP",
                            "value": "up"
                        },
                        {
                            "name": "DOWN",
                            "value": "down"
                        },
                        {
                            "name": "LEFT",
                            "value": "left"
                        },
                        {
                            "name": "RIGHT",
                            "value": "right"
                        },
                        {
                            "name": "TAB",
                            "value": "tab"
                        },
                        {
                            "name": "ESC",
                            "value": "esc"
                        },
                        {
                            "name": "SPACE",
                            "value": "space"
                        },
                        {
                            "name": "SHIFT",
                            "value": "shift"
                        },
                        {
                            "name": "BACKSPACE",
                            "value": "backspace"
                        },
                        {
                            "name": "ONE",
                            "value": "1"
                        },
                        {
                            "name": "TWO",
                            "value": "2"
                        },
                        {
                            "name": "THREE",
                            "value": "3"
                        },
                        {
                            "name": "FOUR",
                            "value": "4"
                        },
                        {
                            "name": "FIVE",
                            "value": "5"
                        },
                        {
                            "name": "SIX",
                            "value": "6"
                        },
                        {
                            "name": "SEVEN",
                            "value": "7"
                        },
                        {
                            "name": "EIGHT",
                            "value": "8"
                        },
                        {
                            "name": "NINE",
                            "value": "9"
                        },
                        {
                            "name": "ZERO",
                            "value": "0"
                        },
                        {
                            "name": "DELETE",
                            "value": "delete"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/key-helper/key-helper.ts"
                }
            ],
            "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts": [
                {
                    "name": "NavigationMode",
                    "childs": [
                        {
                            "name": "INTERNAL"
                        },
                        {
                            "name": "EXTERNAL"
                        },
                        {
                            "name": "EVENT"
                        },
                        {
                            "name": "LABEL"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/common-navigation/common-navigation-model.ts"
                }
            ],
            "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts": [
                {
                    "name": "SelectionMode",
                    "childs": [
                        {
                            "name": "SINGLE"
                        },
                        {
                            "name": "MULTIPLE"
                        }
                    ],
                    "ctype": "miscellaneous",
                    "subtype": "enum",
                    "description": "",
                    "file": "libs/packages/components/src/lib/selected-result/models/sds-selected-item-model-helper.ts"
                }
            ]
        },
        "groupedTypeAliases": {
            "libs/packages/components/src/lib/dialog/dialog-config.ts": [
                {
                    "name": "DialogRole",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"dialog\" | \"alertdialog\"",
                    "file": "libs/packages/components/src/lib/dialog/dialog-config.ts",
                    "description": "<p>Valid ARIA roles for a dialog element. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/menu/menu.component.ts": [
                {
                    "name": "MenuPositionX",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"before\" | \"after\"",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "<p>Menu Positions </p>\n",
                    "kind": 168
                },
                {
                    "name": "MenuPositionY",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"above\" | \"below\"",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "",
                    "kind": 168
                },
                {
                    "name": "MenuSizes",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "",
                    "file": "libs/packages/components/src/lib/menu/menu.component.ts",
                    "description": "<p>Menu available sizes </p>\n",
                    "kind": 177
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-base.ts": [
                {
                    "name": "SdsAccordionDisplayMode",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"default\" | \"basic\"",
                    "file": "libs/packages/components/src/lib/accordion/accordion-base.ts",
                    "description": "<p>Accordion&#39;s display modes. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/accordion/accordion-item.component.ts": [
                {
                    "name": "SdsAccordionItemState",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"expanded\" | \"collapsed\"",
                    "file": "libs/packages/components/src/lib/accordion/accordion-item.component.ts",
                    "description": "<p>Accordion Item&#39;s states. </p>\n",
                    "kind": 168
                }
            ],
            "libs/packages/components/src/lib/toolbar/toolbar.component.ts": [
                {
                    "name": "SdsToolbarState",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "\"expanded\" | \"collapsed\"",
                    "file": "libs/packages/components/src/lib/toolbar/toolbar.component.ts",
                    "description": "<p>Toolbar&#39;s states. </p>\n",
                    "kind": 168
                }
            ]
        }
    }
};

export default COMPONENTS;