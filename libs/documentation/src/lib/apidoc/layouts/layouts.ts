const LAYOUTS = {
    "pipes": [],
    "interfaces": [
        {
            "name": "Alert",
            "id": "interface-Alert-5187e6bee7c5825196de89acd19cc4c1",
            "file": "libs/packages/layouts/src/lib/feature/system-alert/model/alert.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "export interface Alert {\n  header: string,\n  date: Date,\n  description: string,\n  displayDescription?: boolean;\n}",
            "properties": [
                {
                    "name": "date",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "Date",
                    "optional": false,
                    "description": "",
                    "line": 3
                },
                {
                    "name": "description",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 4
                },
                {
                    "name": "displayDescription",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": true,
                    "description": "",
                    "line": 5
                },
                {
                    "name": "header",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 2
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": []
        },
        {
            "name": "ExternalLink",
            "id": "interface-ExternalLink-e1d21b3fdf86cf1eb51c22eb74417c3d",
            "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };\n// eslint-disable-next-line @typescript-eslint/ban-types\nexport type XOR<T, U> = T | U extends object\n  ? (Without<T, U> & U) | (Without<U, T> & T)\n  : T | U;\n\ninterface LinkBase {\n  id?: string;\n  ariaLabel?: string;\n  innerHtml: string;\n}\n\nexport interface InternalLink extends LinkBase {\n  routerLink: boolean;\n  queryParams?: any;\n}\n\nexport interface ExternalLink extends LinkBase {\n  href: string;\n  target?: '_self' | '_blank';\n}\n\nexport type Link = XOR<InternalLink, ExternalLink>;\n",
            "properties": [
                {
                    "name": "href",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 19
                },
                {
                    "name": "target",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "\"_self\" | \"_blank\"",
                    "optional": true,
                    "description": "",
                    "line": 20
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": [],
            "extends": "LinkBase"
        },
        {
            "name": "FooterLogo",
            "id": "interface-FooterLogo-5b7eb1ee3984c380395d80bf3f9eea0f",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n\n  /**\n   * Hide external link icon\n   */\n  hideIcon?: boolean = false;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link\n   */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "agencyName",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 74
                },
                {
                    "name": "href",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>link</p>\n",
                    "line": 72,
                    "rawdescription": "\n\nlink\n"
                },
                {
                    "name": "imageAltText",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Alt text for image</p>\n",
                    "line": 67,
                    "rawdescription": "\n\nAlt text for image\n"
                },
                {
                    "name": "imageSourcePath",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Image Source Path for the Image button</p>\n",
                    "line": 61,
                    "rawdescription": "\n\nImage Source Path for the Image button\n"
                },
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 55,
                    "rawdescription": "\n\nText for the Header\n"
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": []
        },
        {
            "name": "HeaderModel",
            "id": "interface-HeaderModel-02868cb8266e3b61cd27d2bdb01ff7ab",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "home",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "HeaderHome",
                    "optional": false,
                    "description": "<p>Header logo and header logo home link</p>\n",
                    "line": 9,
                    "rawdescription": "\n\nHeader logo and header logo home link\n"
                },
                {
                    "name": "navigationLinks",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "HeaderNavigationLink[]",
                    "optional": false,
                    "description": "<p>List of main navigaation links/drop downs</p>\n",
                    "line": 19,
                    "rawdescription": "\n\nList of main navigaation links/drop downs\n"
                },
                {
                    "name": "secondaryLinks",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "HeaderSecondaryLink[]",
                    "optional": false,
                    "description": "<p>List of secondary links</p>\n",
                    "line": 14,
                    "rawdescription": "\n\nList of secondary links\n"
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": []
        },
        {
            "name": "InternalLink",
            "id": "interface-InternalLink-e1d21b3fdf86cf1eb51c22eb74417c3d",
            "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };\n// eslint-disable-next-line @typescript-eslint/ban-types\nexport type XOR<T, U> = T | U extends object\n  ? (Without<T, U> & U) | (Without<U, T> & T)\n  : T | U;\n\ninterface LinkBase {\n  id?: string;\n  ariaLabel?: string;\n  innerHtml: string;\n}\n\nexport interface InternalLink extends LinkBase {\n  routerLink: boolean;\n  queryParams?: any;\n}\n\nexport interface ExternalLink extends LinkBase {\n  href: string;\n  target?: '_self' | '_blank';\n}\n\nexport type Link = XOR<InternalLink, ExternalLink>;\n",
            "properties": [
                {
                    "name": "queryParams",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any",
                    "optional": true,
                    "description": "",
                    "line": 15
                },
                {
                    "name": "routerLink",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": false,
                    "description": "",
                    "line": 14
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": [],
            "extends": "LinkBase"
        },
        {
            "name": "LinkBase",
            "id": "interface-LinkBase-e1d21b3fdf86cf1eb51c22eb74417c3d",
            "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "export type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };\n// eslint-disable-next-line @typescript-eslint/ban-types\nexport type XOR<T, U> = T | U extends object\n  ? (Without<T, U> & U) | (Without<U, T> & T)\n  : T | U;\n\ninterface LinkBase {\n  id?: string;\n  ariaLabel?: string;\n  innerHtml: string;\n}\n\nexport interface InternalLink extends LinkBase {\n  routerLink: boolean;\n  queryParams?: any;\n}\n\nexport interface ExternalLink extends LinkBase {\n  href: string;\n  target?: '_self' | '_blank';\n}\n\nexport type Link = XOR<InternalLink, ExternalLink>;\n",
            "properties": [
                {
                    "name": "ariaLabel",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 9
                },
                {
                    "name": "id",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "innerHtml",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 10
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": []
        },
        {
            "name": "Page",
            "id": "interface-Page-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "pageNumber",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page number</p>\n",
                    "line": 27,
                    "rawdescription": "\n\nPage number\n"
                },
                {
                    "name": "pageSize",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Page size</p>\n",
                    "line": 32,
                    "rawdescription": "\n\nPage size\n"
                },
                {
                    "name": "totalPages",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of pages</p>\n",
                    "line": 37,
                    "rawdescription": "\n\nTotal number of pages\n"
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": []
        },
        {
            "name": "ResultsModel",
            "id": "interface-ResultsModel-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "filterModel",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 108
                },
                {
                    "name": "page",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": true,
                    "description": "",
                    "line": 107
                },
                {
                    "name": "sort",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 106
                }
            ],
            "indexSignatures": [],
            "kind": 163,
            "methods": []
        },
        {
            "name": "SearchListInterface",
            "id": "interface-SearchListInterface-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "interface",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [],
            "indexSignatures": [],
            "kind": 165,
            "methods": [
                {
                    "name": "getData",
                    "args": [
                        {
                            "name": "search",
                            "type": "SearchParameters",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "Observable<SearchResult>",
                    "typeParameters": [],
                    "line": 62,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nMethod to get the takes it takes in the SearchParameters and returns SearchResult object\n",
                    "description": "<p>Method to get the takes it takes in the SearchParameters and returns SearchResult object</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 840,
                                "end": 846,
                                "flags": 4194304,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "search"
                            },
                            "type": "SearchParameters",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 834,
                                "end": 839,
                                "flags": 4194304,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ]
        }
    ],
    "injectables": [
        {
            "name": "SdsDrawerCommunicationService",
            "id": "injectable-SdsDrawerCommunicationService-9539dd5998c81e048cecea3b5b23c472",
            "file": "libs/packages/layouts/src/lib/feature/subheader/drawer-communication.service.ts",
            "properties": [
                {
                    "name": "contentTemplate",
                    "defaultValue": "this.currentTemplate.asObservable()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 10
                },
                {
                    "name": "currentTemplate",
                    "defaultValue": "new BehaviorSubject<TemplateRef<any>>(null)",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 9,
                    "modifierKind": [
                        120
                    ]
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "this.isOpen.asObservable()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 7
                },
                {
                    "name": "isOpen",
                    "defaultValue": "new BehaviorSubject(false)",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 6,
                    "modifierKind": [
                        120
                    ]
                }
            ],
            "methods": [
                {
                    "name": "onDrawerOpen",
                    "args": [
                        {
                            "name": "open",
                            "type": "boolean",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 12,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "open",
                            "type": "boolean",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "temp",
                            "type": "TemplateRef<any>",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import { Injectable, TemplateRef } from '@angular/core';\nimport { BehaviorSubject } from 'rxjs';\n\n@Injectable()\nexport class SdsDrawerCommunicationService {\n  private isOpen = new BehaviorSubject(false);\n  isDrawerOpen = this.isOpen.asObservable();\n\n  private currentTemplate= new BehaviorSubject<TemplateRef<any>>(null);\n  contentTemplate = this.currentTemplate.asObservable();\n\n  onDrawerOpen(open: boolean, temp : TemplateRef<any>){\n    this.isOpen.next(open);\n    this.currentTemplate.next(temp);  \n  }\n}",
            "type": "injectable"
        }
    ],
    "guards": [],
    "interceptors": [],
    "classes": [
        {
            "name": "FooterLink",
            "id": "class-FooterLink-5b7eb1ee3984c380395d80bf3f9eea0f",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n\n  /**\n   * Hide external link icon\n   */\n  hideIcon?: boolean = false;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link\n   */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "hideIcon",
                    "defaultValue": "false",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Hide external link icon</p>\n",
                    "line": 47,
                    "rawdescription": "\n\nHide external link icon\n"
                },
                {
                    "name": "mode",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 32,
                    "rawdescription": "\n\nInternal Angualr Routes, External HREF, EVENT: event on parent component\n"
                },
                {
                    "name": "route",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 42,
                    "rawdescription": "\n\nNavigation Route\n"
                },
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 37,
                    "rawdescription": "\n\nText to be displayed in the link\n"
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
            "id": "class-FooterLinkSection-5b7eb1ee3984c380395d80bf3f9eea0f",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n\n  /**\n   * Hide external link icon\n   */\n  hideIcon?: boolean = false;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link\n   */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "links",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "FooterLink[]",
                    "optional": false,
                    "description": "<p>Links in the section</p>\n",
                    "line": 25,
                    "rawdescription": "\n\nLinks in the section\n"
                },
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Title text for the section</p>\n",
                    "line": 20,
                    "rawdescription": "\n\nTitle text for the section\n"
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
            "id": "class-FooterModel-5b7eb1ee3984c380395d80bf3f9eea0f",
            "file": "libs/packages/layouts/src/lib/feature/footer/model/FooterModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode } from '@gsa-sam/components';\n\nexport class FooterModel {\n  /**\n   * List of sections and their links\n   */\n  linkSections: FooterLinkSection[];\n  disclaimer?: string;\n  /**\n   * Footer text and logo\n   */\n\n  footerLogo?: FooterLogo;\n}\n\nexport class FooterLinkSection {\n  /**\n   * Title text for the section\n   */\n  text: string;\n\n  /**\n   * Links in the section\n   */\n  links: FooterLink[];\n}\n\nexport class FooterLink implements INavigationLink {\n  /**\n   * Internal Angualr Routes, External HREF, EVENT: event on parent component\n   */\n  mode: NavigationMode;\n\n  /**\n   * Text to be displayed in the link\n   */\n  text: string;\n\n  /**\n   * Navigation Route\n   */\n  route: string;\n\n  /**\n   * Hide external link icon\n   */\n  hideIcon?: boolean = false;\n}\n\nexport interface FooterLogo {\n  /**\n   * Text for the Header\n   */\n\n  text: string;\n\n  /**\n   * Image Source Path for the Image button\n   */\n\n  imageSourcePath: string;\n\n  /**\n   * Alt text for image\n   */\n\n  imageAltText: string;\n\n  /**\n   * link\n   */\n  href: string;\n\n  agencyName: string;\n}\n",
            "properties": [
                {
                    "name": "disclaimer",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": true,
                    "description": "",
                    "line": 8
                },
                {
                    "name": "footerLogo",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "FooterLogo",
                    "optional": true,
                    "description": "<p>Footer text and logo</p>\n",
                    "line": 13,
                    "rawdescription": "\n\nFooter text and logo\n"
                },
                {
                    "name": "linkSections",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "FooterLinkSection[]",
                    "optional": false,
                    "description": "<p>List of sections and their links</p>\n",
                    "line": 7,
                    "rawdescription": "\n\nList of sections and their links\n"
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
            "id": "class-HeaderHome-02868cb8266e3b61cd27d2bdb01ff7ab",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "id",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 48,
                    "rawdescription": "\n\nIdentifier for the item when search for selected\n"
                },
                {
                    "name": "logo",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Agency Logo for the Header</p>\n",
                    "line": 38,
                    "rawdescription": "\n\nAgency Logo for the Header\n"
                },
                {
                    "name": "mode",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 28,
                    "rawdescription": "\n\nInternal Angualr Routes, External HREF, EVENT: event on parent component\n"
                },
                {
                    "name": "route",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route for Home image button</p>\n",
                    "line": 43,
                    "rawdescription": "\n\nNavigation Route for Home image button\n"
                },
                {
                    "name": "selected",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 53,
                    "rawdescription": "\n\nStatus of if the item is selected\n"
                },
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text for the Header</p>\n",
                    "line": 33,
                    "rawdescription": "\n\nText for the Header\n"
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
            "id": "class-HeaderNavigationLink-02868cb8266e3b61cd27d2bdb01ff7ab",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "children",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "HeaderNavigationLink[]",
                    "optional": true,
                    "description": "<p>List of child navigation items that will show when no route is provieded</p>\n",
                    "line": 79,
                    "rawdescription": "\n\nList of child navigation items that will show when no route is provieded\n"
                },
                {
                    "name": "id",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 84,
                    "rawdescription": "\n\nIdentifier for the item when search for selected\n"
                },
                {
                    "name": "mode",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 64,
                    "rawdescription": "\n\nInternal Angualr Routes, External HREF, EVENT: event on parent component\n"
                },
                {
                    "name": "route",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 74,
                    "rawdescription": "\n\nNavigation Route\n"
                },
                {
                    "name": "selected",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 89,
                    "rawdescription": "\n\nStatus of if the item is selected\n"
                },
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link or button</p>\n",
                    "line": 69,
                    "rawdescription": "\n\nText to be displayed in the link or button\n"
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
            "id": "class-HeaderSecondaryLink-02868cb8266e3b61cd27d2bdb01ff7ab",
            "file": "libs/packages/layouts/src/lib/feature/header/model/HeaderModel.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { INavigationLink, NavigationMode, Selectable } from '@gsa-sam/components';\n\n\nexport interface HeaderModel {\n\n    /**\n     * Header logo and header logo home link\n     */\n    home: HeaderHome;\n\n    /**\n     * List of secondary links\n     */\n    secondaryLinks: HeaderSecondaryLink[];\n\n    /**\n     * List of main navigaation links/drop downs\n     */\n    navigationLinks: HeaderNavigationLink[];\n}\n\n\nexport class HeaderHome implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n    */\n    mode: NavigationMode;\n\n    /**\n     * Text for the Header\n     */\n    text: string;\n\n    /**\n     * Agency Logo for the Header\n     */\n    logo: string;\n\n    /**\n     * Navigation Route for Home image button\n     */\n    route: string;\n\n    /**\n    * Identifier for the item when search for selected\n    */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n/**\n *\n */\nexport class HeaderNavigationLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link or button\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * List of child navigation items that will show when no route is provieded\n     */\n    children?: HeaderNavigationLink[];\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n\n\nexport class HeaderSecondaryLink implements Selectable, INavigationLink {\n\n    /**\n     * Internal Angualr Routes, External HREF, EVENT: event on parent component\n     */\n    mode: NavigationMode;\n\n    /**\n     * Text to be displayed in the link\n     */\n    text: string;\n\n    /**\n     * Navigation Route\n     */\n    route: string;\n\n    /**\n     * image class\n     */\n    imageClass: string;\n\n    /**\n     * displays counter with image\n     */\n    hasCounter?: boolean;\n\n    /**\n     * Identifier for the item when search for selected\n     */\n    id: string;\n\n    /**\n     * Status of if the item is selected\n     */\n    selected?: boolean;\n}\n",
            "properties": [
                {
                    "name": "hasCounter",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>displays counter with image</p>\n",
                    "line": 118,
                    "rawdescription": "\n\ndisplays counter with image\n"
                },
                {
                    "name": "id",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Identifier for the item when search for selected</p>\n",
                    "line": 123,
                    "rawdescription": "\n\nIdentifier for the item when search for selected\n"
                },
                {
                    "name": "imageClass",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>image class</p>\n",
                    "line": 113,
                    "rawdescription": "\n\nimage class\n"
                },
                {
                    "name": "mode",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "NavigationMode",
                    "optional": false,
                    "description": "<p>Internal Angualr Routes, External HREF, EVENT: event on parent component</p>\n",
                    "line": 98,
                    "rawdescription": "\n\nInternal Angualr Routes, External HREF, EVENT: event on parent component\n"
                },
                {
                    "name": "route",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Navigation Route</p>\n",
                    "line": 108,
                    "rawdescription": "\n\nNavigation Route\n"
                },
                {
                    "name": "selected",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": true,
                    "description": "<p>Status of if the item is selected</p>\n",
                    "line": 128,
                    "rawdescription": "\n\nStatus of if the item is selected\n"
                },
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed in the link</p>\n",
                    "line": 103,
                    "rawdescription": "\n\nText to be displayed in the link\n"
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
            "name": "SearchListConfiguration",
            "id": "class-SearchListConfiguration-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "defaultFilterValue",
                    "defaultValue": "{}",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any",
                    "optional": true,
                    "description": "<p>Default values to use during initialization when there is none in url.</p>\n",
                    "line": 99,
                    "rawdescription": "\n\nDefault values to use during initialization when there is none in url.\n"
                },
                {
                    "name": "defaultSortValue",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>default sort value</p>\n",
                    "line": 89,
                    "rawdescription": "\n\ndefault sort value\n"
                },
                {
                    "name": "pageSize",
                    "defaultValue": "25",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Starting page size</p>\n",
                    "line": 94,
                    "rawdescription": "\n\nStarting page size\n"
                },
                {
                    "name": "queryParamsHandling",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "QueryParamsHandling",
                    "optional": true,
                    "description": "",
                    "line": 101
                },
                {
                    "name": "sortList",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "sortItem[]",
                    "optional": false,
                    "description": "<p>List of sort by items</p>\n",
                    "line": 84,
                    "rawdescription": "\n\nList of sort by items\n"
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
            "name": "SearchParameters",
            "id": "class-SearchParameters-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "filter",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any",
                    "optional": false,
                    "description": "<p>filter data</p>\n",
                    "line": 18,
                    "rawdescription": "\n\nfilter data\n"
                },
                {
                    "name": "page",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "Page",
                    "optional": false,
                    "description": "<p>page</p>\n",
                    "line": 8,
                    "rawdescription": "\n\npage\n"
                },
                {
                    "name": "sortField",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Sort value</p>\n",
                    "line": 13,
                    "rawdescription": "\n\nSort value\n"
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
            "name": "SearchResult",
            "id": "class-SearchResult-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "items",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any[]",
                    "optional": false,
                    "description": "<p>Items to be displayed</p>\n",
                    "line": 51,
                    "rawdescription": "\n\nItems to be displayed\n"
                },
                {
                    "name": "totalItems",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items (beyond the page)</p>\n",
                    "line": 46,
                    "rawdescription": "\n\nTotal number of items (beyond the page)\n"
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
            "name": "sortItem",
            "id": "class-sortItem-5132ae15caeb6ada7eeb66cfbf276623",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/model/search-list-layout.model.ts",
            "deprecated": false,
            "deprecationMessage": "",
            "type": "class",
            "sourceCode": "import { QueryParamsHandling } from '@angular/router';\nimport { Observable } from 'rxjs';\nexport class SearchParameters {\n\n    /**\n     * page  \n     */\n    page: Page;\n\n    /**\n     * Sort value\n     */\n    sortField: string\n\n    /**\n     * filter data\n     */\n    filter: any;\n\n}\n\nexport interface Page {\n\n    /**\n     * Page number\n     */\n    pageNumber: number;\n\n    /**\n     * Page size\n     */\n    pageSize: number;\n\n    /**\n     * Total number of pages\n     */\n    totalPages: number;\n\n}\n\nexport class SearchResult {\n\n    /**\n     * Total number of items (beyond the page)\n     */\n    totalItems: number;\n\n    /**\n     * Items to be displayed\n     */\n    items: any[];\n}\n\n\n\nexport interface SearchListInterface {\n\n    /**\n     * Method to get the takes it takes in the SearchParameters and returns SearchResult object\n     * @param search \n     */\n    getData(search: SearchParameters): Observable<SearchResult>;\n}\n\nexport class sortItem {\n    /**\n     * Text to be displayed\n     */\n    text: string;\n\n    /**\n     * Value of Item\n     */\n    value: string;\n\n\n}\n\nexport class SearchListConfiguration {\n\n    /**\n     * List of sort by items\n     */\n    sortList: sortItem[];\n\n    /**\n     * default sort value\n     */\n    defaultSortValue: string;\n\n    /**\n     * Starting page size\n     */\n    pageSize: number = 25;\n\n    /**\n     * Default values to use during initialization when there is none in url.\n     */\n    defaultFilterValue?: any = {};\n\n    queryParamsHandling?: QueryParamsHandling;\n\n}\n\nexport interface ResultsModel {\n    sort?: string;\n    page?: number;\n    filterModel: any;\n}",
            "properties": [
                {
                    "name": "text",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Text to be displayed</p>\n",
                    "line": 69,
                    "rawdescription": "\n\nText to be displayed\n"
                },
                {
                    "name": "value",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>Value of Item</p>\n",
                    "line": 74,
                    "rawdescription": "\n\nValue of Item\n"
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
            "name": "SdsLandingCardTitleDirective",
            "id": "directive-SdsLandingCardTitleDirective-9abbd856825f9e40c3a17c7c1cf6b643",
            "file": "libs/packages/layouts/src/lib/feature/landing/card/card.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import { Component, Directive } from '@angular/core';\n\n@Directive({\n  selector: `[sdsLandingCardTitle]`,\n  host: {\n    class: 'sds-card__title',\n  },\n})\nexport class SdsLandingCardTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-card',\n  templateUrl: './card.component.html',\n})\nexport class SdsLandingCardComponent {}\n",
            "selector": "[sdsLandingCardTitle]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsLandingPageCardDirective",
            "id": "directive-SdsLandingPageCardDirective-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "selector": "[sdsLandingPageCard]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsLandingPageLegacyLogoDirective",
            "id": "directive-SdsLandingPageLegacyLogoDirective-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "selector": "[sdsLandingPageLegacyLogo]",
            "providers": [],
            "inputsClass": [
                {
                    "name": "logoSize",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 51,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsLandingPageOverviewDirective",
            "id": "directive-SdsLandingPageOverviewDirective-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "selector": "[sdsLandingPageOverview]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsLandingPageOverviewParagraphDirective",
            "id": "directive-SdsLandingPageOverviewParagraphDirective-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "selector": "[sdsLandingPageOverviewParagraph]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsLandingPageTileDirective",
            "id": "directive-SdsLandingPageTileDirective-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "selector": "[sdsLandingPageTile]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        },
        {
            "name": "SdsLandingPageTitleDirective",
            "id": "directive-SdsLandingPageTitleDirective-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "type": "directive",
            "description": "",
            "rawdescription": "\n",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "selector": "[sdsLandingPageTitle]",
            "providers": [],
            "inputsClass": [],
            "outputsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "propertiesClass": [],
            "methodsClass": []
        }
    ],
    "components": [
        {
            "name": "SdsActionsMenuComponent",
            "id": "component-SdsActionsMenuComponent-b29369330e17e32ba02c3425b2f75f08",
            "file": "libs/packages/layouts/src/lib/feature/actions-menu/actions-menu.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-actions-menu",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "actions-menu.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 8,
                    "type": "any"
                },
                {
                    "name": "size",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 9,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 10,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter } from '@angular/core';\n\n@Component({\n  selector: 'sds-actions-menu',\n  templateUrl: 'actions-menu.component.html'\n})\nexport class SdsActionsMenuComponent {\n  @Input() model;\n  @Input() size: string;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [],
                "line": 10
            },
            "templateData": "<!-- Button that triggers menu (sdsMenuTriggerFor) -->\n<button class=\"sds-button sds-button--circular\" [class.sds-button--primary]=\"model.trigger.type === 'primary'\"\n  [class.sds-button--shadow]=\"model.trigger.shadow\" [class.sds-button--small]=\"size === 'sm'\"\n  [sdsMenuTriggerFor]=\"menu\">\n  <usa-icon [icon]=\"'three-dots-vertical'\" [size]=\"'1x'\"></usa-icon>\n  <span class=\"usa-sr-only\">Toggle Actions</span>\n</button>\n\n<!-- Menu content -->\n<sds-menu #menu=\"sdsMenu\" [size]=\"size\" xPosition=\"before\" overlapTrigger=\"true\">\n  <!-- Menu header (optional) -->\n  <sds-menu-header>Actions</sds-menu-header>\n  <!-- Menu items -->\n  <button *ngFor=\"let button of model.actions\" (click)=\"clicks.emit(button.id)\" sds-menu-item>\n    {{ button.text }}\n  </button>\n</sds-menu>\n"
        },
        {
            "name": "SdsDrawerContentComponent",
            "id": "component-SdsDrawerContentComponent-39290a283693ddb1c0d1a3e7bcd70536",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-drawer-content",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "drawer.content.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "data",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 55,
                    "modifierKind": [
                        122
                    ]
                },
                {
                    "name": "drawerContentTemplate",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 52
                },
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "false",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 53
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 56,
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef,\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss'],\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html',\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html',\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html',\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      (template) => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe((open) => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "deprecated": false,
                        "deprecationMessage": ""
                    }
                ],
                "line": 53,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<ng-container *ngIf=\"drawerContentTemplate && isDrawerOpen\" [ngTemplateOutlet]=\"drawerContentTemplate\" >\n</ng-container>\n"
        },
        {
            "name": "SdsFeedbackComponent",
            "id": "component-SdsFeedbackComponent-c857a6f52f480cd45900568b7e7139b1",
            "file": "libs/packages/layouts/src/lib/feature/sds-feedback/sds-feedback.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-feedback",
            "styleUrls": [
                "./sds-feedback.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./sds-feedback.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "feedbackModel",
                    "defaultValue": "new FormControl('')",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 11,
                    "type": "FormControl"
                },
                {
                    "name": "isCollapsedContent",
                    "defaultValue": "true",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 12,
                    "type": "boolean"
                }
            ],
            "outputsClass": [
                {
                    "name": "feedbackSubmit",
                    "defaultValue": "new EventEmitter<string>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 13,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "onFeedbackSubmitClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 17,
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';\nimport { FormControl } from '@angular/forms';\n\n@Component({\n  selector: 'sds-feedback',\n  templateUrl: './sds-feedback.component.html',\n  styleUrls: ['./sds-feedback.component.scss']\n})\nexport class SdsFeedbackComponent {\n\n  @Input() feedbackModel: FormControl = new FormControl('');\n  @Input() isCollapsedContent = true;\n  @Output() feedbackSubmit = new EventEmitter<string>();\n\n  constructor() { }\n\n  onFeedbackSubmitClicked() {\n    this.feedbackSubmit.emit(this.feedbackModel.value);\n  }\n\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./sds-feedback.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [],
                "line": 13
            },
            "templateData": "<div class=\"sds-feedback\">\n  <button\n    type=\"button\"\n    class=\"sds-feedback__button simple-toggle\"\n    [attr.aria-expanded]=\"!isCollapsedContent\"\n    aria-controls=\"feedbackCollapseId\"\n    (click)=\"isCollapsedContent = !isCollapsedContent\">\n\n    <usa-icon [icon]=\"'arrow-up-circle-fill'\" [sdsCollapse]=\"isCollapsedContent\"\n      [size]=\"'2x'\" class=\"text-primary margin-auto\"></usa-icon>\n\n    <usa-icon [icon]=\"'arrow-down-circle-fill'\" [size]=\"'2x'\"\n      [sdsCollapse]=\"!isCollapsedContent\" class=\"text-primary margin-auto\"></usa-icon>\n\n    <span class=\"sds-feedback__title\">Feedback</span>\n  </button>\n  <div\n    id=\"feedbackCollapseId\"\n    [sdsCollapse]=\"isCollapsedContent\"\n    class=\"sds-feedback__response\"\n  >\n    <div class=\"tablet:width-tablet-lg padding-4 margin-auto\">\n      <span class=\"sds-feedback__response-title\">One Question </span>\n      <span class=\"sds-feedback__response-title-thin\"> Survey</span>\n      <p class=\"sds-feedback__response-text\">\n        What changes or improvements would you suggest?\n      </p>\n      <textarea [formControl]=\"feedbackModel\" class=\"sds-feedback__input\" id=\"feedbackInput\" aria-label=\"Feedback input form\" type=\"text\" rows=\"8\"></textarea>\n      <p class=\"text-left\">\n        <button class=\"usa-button usa-button--secondary\" id=\"feedbackSubmit\"\n          aria-label=\"Feedback submit\" (click)=\"onFeedbackSubmitClicked()\">Submit</button>\n      </p>\n    </div>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsFooterComponent",
            "id": "component-SdsFooterComponent-a360ed16f690e6bc8863f2ee05644c12",
            "file": "libs/packages/layouts/src/lib/feature/footer/footer.component.ts",
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
                    "name": "feedbackTemplate",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 24,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "model",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "Model used for the different display portions of the footer",
                    "description": "<p>Model used for the different display portions of the footer</p>\n",
                    "line": 23,
                    "type": "FooterModel"
                }
            ],
            "outputsClass": [
                {
                    "name": "feedbackSubmit",
                    "defaultValue": "new EventEmitter<string>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 33,
                    "type": "EventEmitter"
                },
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nevent for event based\n",
                    "description": "<p>event for event based</p>\n",
                    "line": 30,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "expandedIndex",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "",
                    "line": 13,
                    "modifierKind": [
                        122
                    ]
                },
                {
                    "name": "innerWidth",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any",
                    "optional": false,
                    "description": "",
                    "line": 12,
                    "modifierKind": [
                        122
                    ]
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 18,
                    "rawdescription": "\n\nNavigation helper\n"
                }
            ],
            "methodsClass": [
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 39,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nLink clicked and emits the link data into an event\n",
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 942,
                                "end": 946,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 936,
                                "end": 941,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onFeedbackSubmitClicked",
                    "args": [
                        {
                            "name": "feedback",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "feedback",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';\nimport { FooterModel } from './model/FooterModel';\nimport { INavigationLink } from '@gsa-sam/components';\nimport { NavigationHelper } from '@gsa-sam/components';\n\n@Component({\n  selector: 'sds-footer',\n  templateUrl: './footer.component.html',\n  styleUrls: ['./footer.component.scss']\n})\nexport class SdsFooterComponent {\n  public innerWidth: any;\n  public expandedIndex: number;\n\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * Model used for the different display portions of the footer\n   */\n  @Input() model: FooterModel;\n  @Input() feedbackTemplate: TemplateRef<any>;\n  \n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n\n  @Output()\n  feedbackSubmit = new EventEmitter<string>();\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  onFeedbackSubmitClicked(feedback: string) {\n    this.feedbackSubmit.emit(feedback);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "\n",
                    "styleUrl": "./footer.component.scss"
                }
            ],
            "stylesData": "",
            "templateData": "<footer class=\"usa-footer\" role=\"contentinfo\">\n  <div *ngIf=\"feedbackTemplate; else defaultFeedback\">\n    <ng-container *ngTemplateOutlet=\"feedbackTemplate\"></ng-container>\n  </div>\n\n  <ng-template #defaultFeedback>\n    <sds-feedback (feedbackSubmit)=\"onFeedbackSubmitClicked($event)\"></sds-feedback>\n  </ng-template>\n\n  <div class=\"usa-footer__primary-section\">\n    <div\n      class=\"grid-container margin-x-0 mobile-lg:margin-x-auto padding-x-0 mobile-lg:padding-x-auto display-none tablet:display-block\">\n      <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap\">\n        <div class=\"tablet:grid-col-12\">\n          <nav class=\"usa-footer__nav margin-x-0 mobile-lg:margin-x-2 padding-x-0 mobile-lg:padding-x-2\"\n            aria-label=\"Footer Navigation Links\">\n            <div class=\"grid-row grid-gap-0 mobile-lg:grid-gap-4\">\n              <div class=\"mobile-lg:grid-col-6 desktop:grid-col-3\" *ngFor=\"let section of model.linkSections\">\n                <section class=\"usa-footer__primary-content usa-footer__primary-content--collapsible\">\n                  <span class=\"h4 usa-footer__primary-link\">{{ section.text }}</span>\n                  <ul class=\"usa-list usa-list--unstyled\">\n                    <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\n                      <ng-container [ngTemplateOutlet]=\"\n                          navigationHelper.isLinkInternal(link)\n                            ? footerRouteLinkTemplate\n                            : navigationHelper.isLinkExternal(link)\n                            ? footerHREFLinkTemplate\n                            : footerEVENTLinkTemplate\n                        \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n                    </li>\n                  </ul>\n                </section>\n              </div>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n    <nav class=\"sds-footer__nav--accordion display-block tablet:display-none\" aria-label=\"Footer Navigation Links\">\n      <sds-accordion-next [multi]=\"true\">\n        <sds-accordion-item *ngFor=\"let section of model.linkSections; let $index = index\">\n          <sds-accordion-title>{{ section.text }}</sds-accordion-title>\n          <sds-accordion-content>\n            <ul class=\"usa-list usa-list--unstyled padding-y-1\">\n              <li class=\"usa-footer__secondary-link\" *ngFor=\"let link of section.links\">\n                <ng-container [ngTemplateOutlet]=\"\n                    navigationHelper.isLinkInternal(link)\n                      ? footerRouteLinkTemplate\n                      : navigationHelper.isLinkExternal(link)\n                      ? footerHREFLinkTemplate\n                      : footerEVENTLinkTemplate\n                  \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n              </li>\n            </ul>\n          </sds-accordion-content>\n        </sds-accordion-item>\n      </sds-accordion-next>\n    </nav>\n  </div>\n  <div class=\"usa-footer__secondary-section\">\n    <div class=\"grid-container\">\n      <div class=\"grid-row grid-gap\">\n        <div class=\"grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-4 margin-bottom-4\">\n          <div class=\"sds-footer__logo\">\n            <a class=\"sds-footer__logo-link\" [attr.href]=\"model.footerLogo.href\">\n              <img *ngIf=\"model.footerLogo\" class=\"usa-footer__logo-img\" [attr.src]=\"model.footerLogo.imageSourcePath\"\n                [attr.alt]=\"model.footerLogo.imageAltText\" />\n            </a>\n            <h3 class=\"sds-footer__logo-heading\">\n              {{model.footerLogo.agencyName}}\n            </h3>\n          </div>\n        </div>\n        <div class=\"sds-footer__note grid-col-12 mobile-lg:grid-col-6 tablet:grid-col-8\" [innerHTML]=\"model.disclaimer\">\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n\n<ng-template #footerRouteLinkTemplate let-link>\n  <a class=\"usa-link\" [routerLink]=\"[link.route]\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerHREFLinkTemplate let-link>\n  <a class=\"usa-link\" [attr.aria-label]=\"link.text\" [hideIcon]=\"link.hideIcon\" [href]=\"link.route\">{{ link.text }}</a>\n</ng-template>\n\n<ng-template #footerEVENTLinkTemplate let-link>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\">{{\n    link.text\n  }}</a>\n</ng-template>\n"
        },
        {
            "name": "SdsHeaderComponent",
            "id": "component-SdsHeaderComponent-a6ef422169efad8553466ee65dcffacc",
            "file": "libs/packages/layouts/src/lib/feature/header/header.component.ts",
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
                    "name": "alertsTemplate",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 48,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "model",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "Model used for the different display portions of the header",
                    "description": "<p>Model used for the different display portions of the header</p>\n",
                    "line": 42,
                    "type": "HeaderModel"
                },
                {
                    "name": "showHeaderLogo",
                    "defaultValue": "true",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 46,
                    "type": "boolean"
                },
                {
                    "name": "showTopBanner",
                    "defaultValue": "true",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "determines if the top banner is shown",
                    "description": "<p>determines if the top banner is shown</p>\n",
                    "line": 37,
                    "type": "boolean"
                },
                {
                    "name": "topBannerDescription",
                    "defaultValue": "''",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 44,
                    "type": "string"
                }
            ],
            "outputsClass": [
                {
                    "name": "linkEvent",
                    "defaultValue": "new EventEmitter<INavigationLink>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nevent for event based\n",
                    "description": "<p>event for event based</p>\n",
                    "line": 54,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "closeNavBtn",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 27,
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
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 28
                },
                {
                    "name": "navigationHelper",
                    "defaultValue": "new NavigationHelper()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "<p>Navigation helper</p>\n",
                    "line": 32,
                    "rawdescription": "\n\nNavigation helper\n"
                },
                {
                    "name": "openNavBtn",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "ElementRef",
                    "optional": false,
                    "description": "",
                    "line": 26,
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
                    "line": 194,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "deselect",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 97,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nDeselects all the items in the header model\n",
                    "description": "<p>Deselects all the items in the header model</p>\n"
                },
                {
                    "name": "find",
                    "args": [
                        {
                            "name": "id",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 126,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nFinds the navigation element by id in the header model\n",
                    "description": "<p>Finds the navigation element by id in the header model</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 2753,
                                "end": 2755,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 2747,
                                "end": 2752,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
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
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "Selectable",
                    "typeParameters": [],
                    "line": 150,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nSearchs the items in the navigation links\n",
                    "description": "<p>Searchs the items in the navigation links</p>\n",
                    "modifierKind": [
                        120
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3357,
                                "end": 3359,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 3351,
                                "end": 3356,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": ""
                        },
                        {
                            "name": "toReturn",
                            "type": "Selectable",
                            "deprecated": false,
                            "deprecationMessage": "",
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
                    "line": 68,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nseeif any secondary link has a counter\n",
                    "description": "<p>seeif any secondary link has a counter</p>\n"
                },
                {
                    "name": "linkClickEvent",
                    "args": [
                        {
                            "name": "link",
                            "type": "INavigationLink",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "boolean",
                    "typeParameters": [],
                    "line": 172,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nLink clicked and emits the link data into an event\n",
                    "description": "<p>Link clicked and emits the link data into an event</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 3951,
                                "end": 3955,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "link"
                            },
                            "type": "INavigationLink",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 3945,
                                "end": 3950,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
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
                    "line": 205,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "onBrowserResize",
                    "args": [
                        {
                            "name": "event",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 181,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "decorators": [
                        {
                            "name": "HostListener",
                            "stringifiedArguments": "'window:resize', ['$event']"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "openMobileNav",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 190,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "removeWhiteSpace",
                    "args": [
                        {
                            "name": "text",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 59,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nTakes in a text string and removes all white space characters and returns the new string\n",
                    "description": "<p>Takes in a text string and removes all white space characters and returns the new string</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1266,
                                "end": 1270,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "text"
                            },
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 1260,
                                "end": 1265,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
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
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 86,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nDeselects previous seletion\n",
                    "description": "<p>Deselects previous seletion</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1809,
                                "end": 1811,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "id"
                            },
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 1803,
                                "end": 1808,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "window:resize",
                    "args": [
                        {
                            "name": "event",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 181
                }
            ],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  Output,\n  EventEmitter,\n  ViewChild,\n  ElementRef,\n  HostListener,\n  TemplateRef\n} from '@angular/core';\nimport {\n  HeaderModel,\n  HeaderNavigationLink,\n  HeaderSecondaryLink\n} from './model/HeaderModel';\nimport { INavigationLink, Selectable } from '@gsa-sam/components';\nimport { NavigationHelper } from '@gsa-sam/components';\n\n\n@Component({\n  selector: 'sds-header',\n  templateUrl: './header.component.html',\n  styleUrls: ['./header.component.scss']\n})\nexport class SdsHeaderComponent {\n  @ViewChild('usaNavOpen') openNavBtn: ElementRef;\n  @ViewChild('usaNavClose') closeNavBtn: ElementRef;\n  mobileNavActive = false;\n  /**\n   * Navigation helper\n   */\n  navigationHelper = new NavigationHelper();\n\n  /**\n   * determines if the top banner is shown\n   */\n  @Input() showTopBanner = true;\n\n  /**\n   * Model used for the different display portions of the header\n   */\n  @Input() model: HeaderModel;\n\n  @Input() topBannerDescription = '';\n\n  @Input() showHeaderLogo = true;\n\n  @Input() alertsTemplate: TemplateRef<any>;\n\n  /**\n   * event for event based\n   */\n  @Output()\n  linkEvent = new EventEmitter<INavigationLink>();\n  /**\n   * Takes in a text string and removes all white space characters and returns the new string\n   * @param text\n   */\n  removeWhiteSpace(text: string) {\n    return text.replace(/ /g, '');\n  }\n  constructor() {\n   \n  }\n  /**\n   * seeif any secondary link has a counter\n   */\n  hasCounter(): boolean {\n    let hasCounter = false;\n    if (this.model) {\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {\n          if (item.hasCounter) {\n            hasCounter = true;\n          }\n        });\n      }\n    }\n    return hasCounter;\n  }\n\n  /**\n   * Deselects previous seletion\n   * @param id\n   */\n  select(id: string) {\n    this.deselect();\n    const item = this.find(id);\n    if (item) {\n      item.selected = true;\n    }\n  }\n\n  /**\n   * Deselects all the items in the header model\n   */\n  deselect() {\n    if (this.model) {\n      if (this.model.home) {\n        this.model.home.selected = false;\n      }\n      if (this.model.navigationLinks) {\n        this.model.navigationLinks.forEach(function(\n          item: HeaderNavigationLink\n        ) {\n          item.selected = false;\n          if (item.children) {\n            item.children.forEach(function(child: HeaderNavigationLink) {\n              child.selected = false;\n            });\n          }\n        });\n      }\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {\n          item.selected = false;\n        });\n      }\n    }\n  }\n\n  /**\n   * Finds the navigation element by id in the header model\n   * @param id of the navigation item\n   */\n  find(id: string): Selectable {\n    let toReturn = null;\n    if (this.model) {\n      if (this.model.home) {\n        if (this.model.home.id === id) {\n          toReturn = this.model.home;\n        }\n      }\n      toReturn = this.findNavigationLinks(id, toReturn);\n      if (this.model.secondaryLinks) {\n        this.model.secondaryLinks.forEach(function(item: HeaderSecondaryLink) {\n          if (item.id === id) {\n            toReturn = item;\n          }\n        });\n      }\n    }\n    return toReturn;\n  }\n\n  /**\n   * Searchs the items in the navigation links\n   * @param id\n   */\n  private findNavigationLinks(id: string, toReturn: Selectable): Selectable {\n    if (this.model.navigationLinks) {\n      this.model.navigationLinks.forEach(function(item: HeaderNavigationLink) {\n        if (item.id === id) {\n          toReturn = item;\n        }\n        if (item.children) {\n          item.children.forEach(function(child: HeaderNavigationLink) {\n            if (child.id === id) {\n              toReturn = child;\n            }\n          });\n        }\n      });\n    }\n    return toReturn;\n  }\n\n  /**\n   * Link clicked and emits the link data into an event\n   * @param link\n   */\n  linkClickEvent(link: INavigationLink) {\n    this.linkEvent.emit(link);\n    return false;\n  }\n\n  // When the mobile nav is active, and the close box isn't visible,\n  // we know the user's viewport has been resized to be larger.\n  // Let's make the page state consistent by deactivating the mobile nav.\n  @HostListener('window:resize', ['$event'])\n  onBrowserResize(event) {\n    if (\n      this.mobileNavActive &&\n      this.closeNavBtn.nativeElement.getBoundingClientRect().width === 0\n    ) {\n      this.mobileNavActive = false;\n    }\n  }\n\n  openMobileNav() {\n    this.mobileNavActive = true;\n  }\n\n  closeMobileNav() {\n    this.mobileNavActive = false;\n    // The mobile nav was just deactivated, and focus was on the close\n    // button, which is no longer visible. We don't want the focus to\n    // disappear into the void, so focus on the menu button if it's\n    // visible (this may have been what the user was just focused on,\n    // if they triggered the mobile nav by mistake).\n    this.openNavBtn.nativeElement.focus();\n  }\n\n  // The mobile nav was just activated, so focus on the close button,\n  navAnimationEnd() {\n    this.closeNavBtn.nativeElement.focus();\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./header.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [],
                "line": 61
            },
            "templateData": "<sds-top-banner *ngIf=\"showTopBanner\" [description]=\"topBannerDescription\"></sds-top-banner>\n\n<div *ngIf=\"alertsTemplate\">\n  <ng-container [ngTemplateOutlet]=\"alertsTemplate\"></ng-container>\n</div>\n\n<div class=\"usa-overlay\" [class.is-visible]=\"mobileNavActive\" (click)=\"closeMobileNav()\"></div>\n<header class=\"usa-header usa-header--extended\">\n  <div class=\"usa-navbar\">\n    <div *ngIf=\"showHeaderLogo; else fillerBlock\" class=\"usa-logo\">\n      <ng-container [ngTemplateOutlet]=\"\n            navigationHelper.isLinkInternal(model.home)\n              ? homeLinkRouteTemplate\n              : homeLinkHREFTemplate\n          \" [ngTemplateOutletContext]=\"{ $implicit: model.home }\"></ng-container>\n    </div>\n    <button #usaNavOpen class=\"usa-menu-btn\" (click)=\"openMobileNav()\">\n      <div class=\"sds-stack sds-lg\">\n        <usa-icon class=\"sds-stack-icon text-primary\" [icon]=\"'square-fill'\" [size]=\"'2x'\"></usa-icon>\n        <usa-icon class=\"sds-stack-icon\" [icon]=\"'bars'\" [size]=\"'lg'\"></usa-icon>\n        <usa-icon *ngIf=\"hasCounter()\" class=\"sds-stack-icon\" [icon]=\"'circle-fill'\" [size]=\"'xs'\"\n          [classes]=\"['counter-icon']\"></usa-icon>\n      </div>\n      <!-- <fa-layers [fixedWidth]=\"true\" size=\"3x\">\n        <fa-icon [icon]=\"['fas', 'square']\" [classes]=\"['text-primary']\"></fa-icon>\n        <fa-icon [icon]=\"['sds', 'bars']\" [classes]=\"['icon-bars']\" transform=\"shrink-6\"></fa-icon>\n        <fa-layers-counter *ngIf=\"hasCounter()\" [classes]=\"['icon-layers-counter']\"></fa-layers-counter>\n      </fa-layers> -->\n      <span class=\"usa-sr-only\">Menu</span>\n    </button>\n  </div>\n  <nav aria-label=\"Primary navigation\" class=\"usa-nav\" (keydown.esc)=\"closeMobileNav()\"\n    (animationend)=\"navAnimationEnd()\" [class.is-visible]=\"mobileNavActive\" [cdkTrapFocus]=\"mobileNavActive\">\n    <div class=\"usa-nav__inner\">\n      <button #usaNavClose class=\"usa-nav__close\" (click)=\"closeMobileNav()\">\n        <usa-icon [icon]=\"'x-circle'\" [size]=\"'lg'\"></usa-icon>\n        <!-- <fa-layers [fixedWidth]=\"true\" size=\"lg\">\n          <fa-icon [icon]=\"['fas', 'circle']\" [inverse]=\"true\" transform=\"grow-2\"></fa-icon>\n          <fa-icon [icon]=\"['fas', 'times']\" transform=\"shrink-6\"></fa-icon>\n        </fa-layers> -->\n        <span class=\"usa-sr-only\">Close</span>\n      </button>\n      <ul class=\"usa-nav__primary usa-accordion\">\n        <li *ngFor=\"let link of model.navigationLinks\" class=\"usa-nav__primary-item\">\n          <ng-container [ngTemplateOutlet]=\"link.route ? linkTemplate : dropDownTemplate\"\n            [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n        </li>\n      </ul>\n      <div class=\"usa-nav__secondary\" [ngClass]=\"{'sds-nav__secondary--blank': !showHeaderLogo}\">\n        <ul class=\"usa-nav__secondary-links\">\n          <li *ngFor=\"let link of model.secondaryLinks\" class=\"usa-nav__secondary-item\">\n            <ng-container [ngTemplateOutlet]=\"\n                navigationHelper.isLinkInternal(link)\n                  ? secondaryRouteLinkTemplate\n                  : navigationHelper.isLinkExternal(link)\n                  ? secondaryHREFLinkTemplate\n                  : secondaryEVENTLinkTemplate\n              \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</header>\n<ng-template #homeLinkRouteTemplate let-home>\n  <a [routerLink]=\"home.route\" title=\"Home\" aria-label=\"Go to Home page\">\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\n  </a>\n</ng-template>\n\n<ng-template #homeLinkHREFTemplate let-home>\n  <a [attr.href]=\"home.route\" title=\"Home\" aria-label=\"Go to Home page\">\n    <img class=\"sds-header__logo\" [src]=\"home.logo\" [alt]=\"home.text\" />\n  </a>\n</ng-template>\n\n<ng-template #secondaryRouteLinkTemplate let-link>\n  <a [attr.id]=\"link.id\" [routerLink]=\"[link.route]\" [attr.class]=\"link.selected ? 'usa-current' : ''\">\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #secondaryHREFLinkTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.href]=\"[link.route]\" [attr.class]=\"link.selected ? 'usa-current' : ''\">\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #secondaryEVENTLinkTemplate let-link>\n  <a [attr.id]=\"link.id\" (click)=\"linkClickEvent(link)\" href=\"javascript:void(0)\"\n    [attr.class]=\"link.selected ? 'usa-current' : ''\">\n    <ng-container [ngTemplateOutlet]=\"iconLinkTemplate\" [ngTemplateOutletContext]=\"{ $implicit: link }\">\n    </ng-container>\n  </a>\n</ng-template>\n\n<ng-template #iconLinkTemplate let-link>\n  <div class=\"sds-stack sds-sm\">\n    <usa-icon class=\"sds-stack-icon text-ink\" [icon]=\"link.imageClass\"></usa-icon>\n    <usa-icon *ngIf=\"link.hasCounter\" class=\"sds-stack-icon\" [icon]=\"'circle-fill'\" [size]=\"'xs'\"\n      [classes]=\"['counter-icon']\"></usa-icon>\n  </div>\n  <!-- <fa-layers [fixedWidth]=\"true\">\n    <usa-icon [icon]=\"[link.imageClassPrefix, link.imageClass]\"></usa-icon>\n    <fa-layers-counter *ngIf=\"link.hasCounter\" [classes]=\"['icon-layers-counter']\"></fa-layers-counter>\n  </fa-layers> -->\n  <span class=\"sds-nav__secondary-item-text\">{{ link.text }}</span>\n</ng-template>\n\n<ng-template #linkTemplate let-link>\n  <ng-container [ngTemplateOutlet]=\"\n      navigationHelper.isLinkInternal(link)\n        ? linkRouteTemplate\n        : navigationHelper.isLinkExternal(link)\n        ? linkHREFTemplate\n        : linkEventTemplate\n    \" [ngTemplateOutletContext]=\"{ $implicit: link }\"></ng-container>\n</ng-template>\n\n<ng-template #linkRouteTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    [routerLink]=\"[link.route]\"><span>{{ link.text }}</span></a>\n</ng-template>\n\n<ng-template #linkHREFTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    [attr.href]=\"[link.route]\"><span>{{ link.text }}</span></a>\n</ng-template>\n\n<ng-template #linkEventTemplate let-link>\n  <a [attr.id]=\"link.id\" [attr.class]=\"link.selected ? 'usa-nav__link usa-current' : 'usa-nav__link'\"\n    href=\"javascript:void(0)\" (click)=\"linkClickEvent(link)\"><span>{{ link.text }}</span></a>\n</ng-template>\n\n<ng-template #dropDownTemplate let-link>\n  <button [attr.id]=\"link.id\" [attr.class]=\"\n      link.selected\n        ? 'usa-accordion__button usa-nav__link usa-current'\n        : 'usa-accordion__button usa-nav__link'\n    \" aria-expanded=\"false\" [attr.aria-controls]=\"removeWhiteSpace(link.text) + '-section'\">\n    <span>{{ link.text }}</span>\n  </button>\n  <ul [attr.id]=\"removeWhiteSpace(link.text) + '-section'\" class=\"usa-nav__submenu\" hidden>\n    <li *ngFor=\"let childLink of link.children\" class=\"usa-nav__submenu-item\">\n      <ng-container [ngTemplateOutlet]=\"\n          navigationHelper.isLinkInternal(childLink)\n            ? dropDownRouteLinkTemplate\n            : navigationHelper.isLinkExternal(childLink)\n            ? dropDownHREFLinkTemplate\n            : dropDownEVENTLinkTemplate\n        \" [ngTemplateOutletContext]=\"{ $implicit: childLink }\"></ng-container>\n    </li>\n  </ul>\n</ng-template>\n\n<ng-template #dropDownRouteLinkTemplate let-childLink>\n  <a [routerLink]=\"[childLink.route]\">{{ childLink.text }}</a>\n</ng-template>\n\n<ng-template #dropDownHREFLinkTemplate let-childLink>\n  <a [attr.href]=\"[childLink.route]\">{{ childLink.text }}</a>\n</ng-template>\n\n<ng-template #dropDownEVENTLinkTemplate let-childLink>\n  <a href=\"javascript:void(0)\" (click)=\"linkClickEvent(childLink)\">{{\n    childLink.text\n  }}</a>\n</ng-template>\n\n<ng-template #fillerBlock>\n  <!--Empty filler space for secondary links for when header logo display is turned off-->\n  <div class=\"sds-navbar--blank \"></div>\n</ng-template>\n"
        },
        {
            "name": "SdsLandingButtonGroupComponent",
            "id": "component-SdsLandingButtonGroupComponent-f119376b36a4ad191ca43b4b52581e0b",
            "file": "libs/packages/layouts/src/lib/feature/landing/button-group/button-group.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-button-group",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "button-group.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "buttons",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 12,
                    "type": "[]"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-button-group',\n  templateUrl: 'button-group.component.html',\n  host: {\n    class: 'display-block'\n  },\n})\n\nexport class SdsLandingButtonGroupComponent {\n  @Input() buttons: [];\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<ng-container *ngFor=\"let button of buttons\">\n  <ng-container *ngIf=\"button.icons; then icon; else noIcon\"></ng-container>\n  <ng-template #icon>\n    <ng-container\n      *ngIf=\"button.clickHandler; then iconWithClickHandler; else iconWithLink\"\n    ></ng-container>\n\n    <ng-template #iconWithClickHandler>\n      <button\n        class=\"display-flex flex-justify-center sds-button width-full margin-bottom-1\"\n        id=\"{{ button.id || button.text }}\"\n        (click)=\"button.clickHandler()\"\n      >\n        <sds-icon\n          class=\"margin-right-1 padding-top-1px\"\n          [icon]=\"[button.icons.icon.icon]\"\n        ></sds-icon>\n        <div class=\"flex-align-self-center\">{{ button.text }}</div>\n      </button>\n    </ng-template>\n\n    <ng-template #iconWithLink>\n      <button\n        class=\"display-flex flex-justify-center sds-button width-full margin-bottom-1\"\n        id=\"{{ button.id || button.text }}\"\n        routerLink=\"{{ button.url }}\"\n      >\n        <sds-icon\n          class=\"margin-right-1 padding-top-1px\"\n          [icon]=\"[button.icons.icon.icon]\"\n        ></sds-icon>\n        <div class=\"flex-align-self-center\">{{ button.text }}</div>\n      </button>\n    </ng-template>\n  </ng-template>\n\n  <ng-template #noIcon>\n    <button\n      *ngIf=\"button.clickHandler; else noClickHandler\"\n      class=\"usa-button width-full margin-bottom-1\"\n      id=\"{{ button.id || button.text }}\"\n      (click)=\"button.clickHandler()\"\n    >\n      {{ button.text }}\n    </button>\n    <ng-template #noClickHandler>\n      <a\n        *ngIf=\"button.external; else routerLink\"\n        class=\"usa-button width-full margin-bottom-1\"\n        [ngClass]=\"button.classes\"\n        href=\"{{ button.url }}\"\n        >{{ button.text }}</a\n      >\n      <ng-template #routerLink>\n        <a\n          class=\"usa-button width-full margin-bottom-1\"\n          [ngClass]=\"button.classes\"\n          routerLink=\"{{ button.url }}\"\n          >{{ button.text }}</a\n        >\n      </ng-template>\n    </ng-template>\n  </ng-template>\n</ng-container>\n"
        },
        {
            "name": "SdsLandingCardComponent",
            "id": "component-SdsLandingCardComponent-9abbd856825f9e40c3a17c7c1cf6b643",
            "file": "libs/packages/layouts/src/lib/feature/landing/card/card.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-card",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "./card.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Directive } from '@angular/core';\n\n@Directive({\n  selector: `[sdsLandingCardTitle]`,\n  host: {\n    class: 'sds-card__title',\n  },\n})\nexport class SdsLandingCardTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-card',\n  templateUrl: './card.component.html',\n})\nexport class SdsLandingCardComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"sds-card height-full\">\n  <div\n    class=\"sds-card__header sds-card__header--accent-cool sds-card__header--left\"\n  >\n    <ng-content select=\"[sdsLandingCardTitle]\"></ng-content>\n  </div>\n  <div class=\"sds-card__body bg-white\">\n    <ng-content select=\"[landing-page-card-content]\"></ng-content>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsLandingLinkComponent",
            "id": "component-SdsLandingLinkComponent-e6a9d9651235ce81adf2951924b73796",
            "file": "libs/packages/layouts/src/lib/feature/landing/link/link.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-link",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "./link.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "link",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 9,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { AfterViewInit, Component, Input, OnInit } from '@angular/core';\nimport { Link } from './link.model';\n\n@Component({\n  selector: 'sds-landing-link',\n  templateUrl: './link.component.html'\n})\nexport class SdsLandingLinkComponent {\n  @Input() link;\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<a\n  *ngIf=\"link.href; else internalLink\"\n  class=\"usa-link\"\n  [class.usa-link--external]=\"link.target === '_blank'\"\n  [ngClass]=\"link.classes\"\n  [href]=\"link.href\"\n  [target]=\"link.target\"\n  [innerHtml]=\"link.innerHtml\"\n  [attr.aria-label]=\"\n    link.target === '_blank' ? link.ariaLabel + ' (Opens a new window)' : null\n  \"\n></a>\n\n<ng-template #internalLink>\n  <a\n    class=\"usa-link\"\n    [ngClass]=\"link.classes\"\n    [routerLink]=\"link.routerLink\"\n    [queryParams]=\"link.queryParams\"\n    [innerHtml]=\"link.innerHtml\"\n    [attr.aria-label]=\"link.ariaLabel\"\n  ></a>\n</ng-template>\n"
        },
        {
            "name": "SdsLandingListComponent",
            "id": "component-SdsLandingListComponent-76d95d15908642b3437fe0832b6daa5d",
            "file": "libs/packages/layouts/src/lib/feature/landing/list/list.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-list",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "list.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "list",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 8,
                    "type": "any"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-list',\n  templateUrl: 'list.component.html',\n})\nexport class SdsLandingListComponent {\n  @Input() list;\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<h3 *ngIf=\"list.title\" class=\"sds-list__title\">{{ list.title }}</h3>\n<p *ngIf=\"list.intro\" class=\"margin-bottom-2\" [innerHtml]=\"list.intro\"></p>\n\n<ul\n  class=\"sds-list margin-top-0 margin-bottom-1\"\n  [ngClass]=\"list.classes\"\n  [class.sds-list--icon]=\"list.iconList\"\n>\n  <li *ngFor=\"let item of list.items\">\n    <span *ngIf=\"list.iconList\" class=\"sds-list__item-icon\">\n      <sds-icon\n        *ngIf=\"item.icon.prefix == 'bs'\"\n        [icon]=\"[item.icon.icon]\"\n        [classList]=\"[item.icon.classes]\"\n      >\n      </sds-icon>\n    </span>\n    <span class=\"sds-list__item-content\">\n      <sds-landing-link *ngIf=\"item.link\" [link]=\"item.link\"></sds-landing-link>\n      {{ item.text }}\n    </span>\n  </li>\n</ul>\n"
        },
        {
            "name": "SdsLandingPageComponent",
            "id": "component-SdsLandingPageComponent-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-page",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "page.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div\n  class=\"sds-hero--image minh-card-lg\"\n  style=\"\n    background-position: 100% 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n  \"\n>\n  <div class=\"grid-container\">\n    <ng-content select=\"sds-landing-page-head\"></ng-content>\n  </div>\n</div>\n\n<div class=\"grid-container\">\n  <div class=\"grid-row grid-gap margin-x-6 margin-top-105 margin-bottom-3\">\n    <ng-content select=\"sds-accordion-next\"></ng-content>\n  </div>\n\n  <ng-content select=\"[landing-page-cards]\"></ng-content>\n</div>\n\n<ng-content></ng-content>\n"
        },
        {
            "name": "SdsLandingPageHeadComponent",
            "id": "component-SdsLandingPageHeadComponent-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-page-head",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "page-head.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"grid-row grid-gap margin-x-6\">\n  <div class=\"grid-col-7\">\n    <ng-content select=\"[landing-page-head-left]\"></ng-content>\n  </div>\n  <div class=\"grid-col\">\n    <ng-content select=\"[landing-page-head-right]\"></ng-content>\n  </div>\n  <div class=\"grid-col-12\">\n    <ng-content select=\"[landing-page-head-bottom]\"></ng-content>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsLandingPageHeaderComponent",
            "id": "component-SdsLandingPageHeaderComponent-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-page-header",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "page-header.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"grid-row\">\n  <div class=\"grid-col display-flex flex-align-center\">\n    <div class=\"grid-col display-flex flex-align-center\">\n      <ng-content select=\"[sdsLandingPageTitle]\"></ng-content>\n    </div>\n    <ng-content select=\"sds-landing-page-legacy\"></ng-content>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsLandingPageLegacyComponent",
            "id": "component-SdsLandingPageLegacyComponent-3ac01fe5f3fa64ebf64c14a26d0711bd",
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.component.ts",
            "changeDetection": "ChangeDetectionStrategy.OnPush",
            "encapsulation": [
                "ViewEncapsulation.None"
            ],
            "entryComponents": [],
            "host": {},
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-landing-page-legacy",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "page-legacy.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Directive,\n  ViewEncapsulation,\n  ChangeDetectionStrategy,\n  Input,\n} from '@angular/core';\n\n@Component({\n  selector: 'sds-landing-page-head',\n  templateUrl: 'page-head.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeadComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageTitle]`,\n  host: {\n    class: 'text-gray-70 text-ls-neg-2',\n  },\n})\nexport class SdsLandingPageTitleDirective {}\n\n@Component({\n  selector: 'sds-landing-page-header',\n  templateUrl: 'page-header.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class SdsLandingPageHeaderComponent {}\n\n@Component({\n  selector: 'sds-landing-page-legacy',\n  templateUrl: 'page-legacy.component.html',\n  encapsulation: ViewEncapsulation.None,\n  changeDetection: ChangeDetectionStrategy.OnPush,\n  host: {\n    class: 'grid-col flex-auto text-center',\n  },\n})\nexport class SdsLandingPageLegacyComponent {}\n\n@Directive({\n  selector: `[sdsLandingPageLegacyLogo]`,\n  host: {\n    '[class]': \"logoSize ? 'height-' + logoSize : 'height-4'\",\n  },\n})\nexport class SdsLandingPageLegacyLogoDirective {\n  @Input() logoSize: string;\n}\n\n@Directive({\n  selector: `[sdsLandingPageOverview]`,\n  host: {\n    class: 'display-block margin-top-2',\n  },\n})\nexport class SdsLandingPageOverviewDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageOverviewParagraph]`,\n  host: {\n    class: 'font-sans-md line-height-sans-4',\n  },\n})\nexport class SdsLandingPageOverviewParagraphDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageTile]`,\n  host: {\n    class: 'grid-col',\n  },\n})\nexport class SdsLandingPageTileDirective {}\n\n@Directive({\n  selector: `[sdsLandingPageCard]`,\n  host: {\n    class: '',\n  },\n})\nexport class SdsLandingPageCardDirective {}\n\n@Component({\n  selector: 'sds-landing-page',\n  templateUrl: 'page.component.html',\n})\nexport class SdsLandingPageComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "templateData": "<div class=\"text-semibold font-sans-3xs margin-bottom-2px\">\n  Legacy Website\n</div>\n<ng-content select=\"[sdsLandingPageLegacyLogo]\"></ng-content>\n"
        },
        {
            "name": "SdsSubheaderActionsComponent",
            "id": "component-SdsSubheaderActionsComponent-39290a283693ddb1c0d1a3e7bcd70536",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-actions",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-actions.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "model",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 25,
                    "type": "any"
                }
            ],
            "outputsClass": [
                {
                    "name": "clicks",
                    "defaultValue": "new EventEmitter<string>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 26,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef,\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss'],\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html',\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html',\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html',\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      (template) => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe((open) => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [],
                "line": 26
            },
            "templateData": "<!-- Actions Menu Trigger: Desktop -->\n<span class=\"display-none desktop:display-inline-block\">\n  <button\n    class=\"sds-button sds-button--labeled-icon actions-button\"\n    [sdsMenuTriggerFor]=\"menu\"\n  >\n    Actions\n    <usa-icon [icon]=\"'three-dots-vertical'\" [size]=\"'lg'\" class=\"ellipsis-icon\"></usa-icon>\n  </button>\n</span>\n\n<!-- Actions Menu Trigger: Tablet -->\n<span class=\"desktop:display-none \">\n  <span class=\"display-none tablet-lg:display-inline-block\">\n    <button\n      class=\"sds-button sds-button--circular actions-button\"\n      [sdsMenuTriggerFor]=\"menu\"\n    >\n      <usa-icon [icon]=\"'three-dots-vertical'\" [size]=\"'lg'\" class=\"ellipsis-icon\"></usa-icon>\n      <span class=\"usa-sr-only\">Toggle Actions Menu</span>\n    </button>\n  </span>\n</span>\n\n<!-- Actions Menu Trigger: Mobile -->\n<span class=\"tablet-lg:display-none\">\n  <button\n  class=\"sds-button sds-button--circular actions-button margin-top-05 tablet:margin-top-0\"\n    [sdsMenuTriggerFor]=\"menu\"\n  >\n  <usa-icon [icon]=\"'three-dots-vertical'\" [size]=\"'lg'\" class=\"ellipsis-icon\"></usa-icon>\n  <span class=\"usa-sr-only\">Toggle Actions Menu</span>\n  </button>\n</span>\n\n<!-- Menu content -->\n<sds-menu #menu=\"sdsMenu\" xPosition=\"before\" overlapTrigger=\"true\">\n  <!-- Menu header (optional) -->\n  <sds-menu-header>Actions</sds-menu-header>\n  <!-- Menu items -->\n  <button\n    *ngFor=\"let button of model.actions\"\n    (click)=\"clicks.emit(button.id)\"\n    sds-menu-item\n  >\n    {{ button.text }}\n  </button>\n</sds-menu>\n"
        },
        {
            "name": "SdsSubheaderComponent",
            "id": "component-SdsSubheaderComponent-39290a283693ddb1c0d1a3e7bcd70536",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader",
            "styleUrls": [
                "subheader.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "subheader.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef,\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss'],\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html',\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html',\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html',\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      (template) => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe((open) => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": ".sds-navbar{\n  ::ng-deep{\n    sds-button-group{\n      width: 100%;\n      margin: 0;\n      mat-button-toggle-group{\n        width: 100%;\n        mat-button-toggle{\n          @media screen and (max-width: 480px) {\n            flex: 1 1 0px;\n          }\n          .mat-button-toggle-label-content{\n            width: 100%;\n            .usa-button.usa-button--outline{\n              display: flex;\n              justify-content: center;\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
                    "styleUrl": "subheader.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [],
                "line": 16
            },
            "templateData": "<div class=\"sds-navbar border-bottom border-base-lighter\">\n  <div class=\"sds-subheader__content\">\n    <div class=\"order-first grid-col-auto\">\n      <ng-content></ng-content>\n    </div>\n    <div\n      class=\"margin-x-105 margin-top-05 tablet:margin-top-0 tablet:order-0 grid-col-fill display-flex flex-justify-end tablet-lg:flex-justify-start tablet-lg:padding-left-6\">\n      <ng-content select=\"sds-search\"></ng-content>\n      <ng-content select=\"sds-autocomplete\"></ng-content>\n    </div>\n    <div class=\"order-last grid-col-12 tablet:order-1 tablet:grid-col-auto display-flex button-container\">\n      <ng-content select=\"[subheader-buttons-container]\"></ng-content>\n      <ng-content select=\"[subheader-buttongroup-container]\"></ng-content>\n    </div>\n    <div class=\"order-2 tablet:margin-left-2 grid-col-auto actions-div\">\n      <ng-content select=\"sds-subheader-actions\"></ng-content>\n    </div>\n  </div>\n</div>\n"
        },
        {
            "name": "SdsSubheaderDrawerComponent",
            "id": "component-SdsSubheaderDrawerComponent-39290a283693ddb1c0d1a3e7bcd70536",
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-subheader-drawer",
            "styleUrls": [],
            "styles": [],
            "templateUrl": [
                "subheader-drawer.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "drawerContentTemplate",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 35,
                    "type": "TemplateRef<any>"
                }
            ],
            "outputsClass": [
                {
                    "name": "isDrawerOpen",
                    "defaultValue": "new EventEmitter<boolean>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 36,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "data",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "SdsDrawerCommunicationService",
                    "optional": false,
                    "description": "",
                    "line": 39,
                    "modifierKind": [
                        122
                    ]
                },
                {
                    "name": "isOpen",
                    "defaultValue": "false",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 37
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 44,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "onDrawerOpenClose",
                    "args": [
                        {
                            "name": "ev",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 40,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "ev",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  OnInit,\n  Output,\n  EventEmitter,\n  Input,\n  TemplateRef,\n} from '@angular/core';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\n\n@Component({\n  selector: 'sds-subheader',\n  templateUrl: 'subheader.component.html',\n  styleUrls: ['subheader.component.scss'],\n})\nexport class SdsSubheaderComponent {\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-actions',\n  templateUrl: 'subheader-actions.component.html',\n})\nexport class SdsSubheaderActionsComponent {\n  @Input() model;\n  @Output() clicks = new EventEmitter<string>();\n  constructor() {}\n}\n\n@Component({\n  selector: 'sds-subheader-drawer',\n  templateUrl: 'subheader-drawer.component.html',\n})\nexport class SdsSubheaderDrawerComponent implements OnInit {\n  @Input() drawerContentTemplate: TemplateRef<any>;\n  @Output() isDrawerOpen = new EventEmitter<boolean>();\n  isOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  onDrawerOpenClose(ev) {\n    this.isOpen = !this.isOpen;\n    this.data.onDrawerOpen(this.isOpen, this.drawerContentTemplate);\n  }\n  ngOnInit() {}\n}\n\n@Component({\n  selector: 'sds-drawer-content',\n  templateUrl: 'drawer.content.component.html',\n})\nexport class SdsDrawerContentComponent implements OnInit {\n  drawerContentTemplate: TemplateRef<any>;\n  isDrawerOpen = false;\n\n  constructor(public data: SdsDrawerCommunicationService) {}\n  ngOnInit() {\n    this.data.contentTemplate.subscribe(\n      (template) => (this.drawerContentTemplate = template)\n    );\n    this.data.isDrawerOpen.subscribe((open) => (this.isDrawerOpen = open));\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "deprecated": false,
                        "deprecationMessage": ""
                    }
                ],
                "line": 37,
                "jsdoctags": [
                    {
                        "name": "data",
                        "type": "SdsDrawerCommunicationService",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<button (click)=\"onDrawerOpenClose($event)\" class=\"sds-button sds-button--circular margin-top-2px tablet:margin-top-0\">\n  <usa-icon\n    [icon]=\"isOpen ? 'arrow-up' : 'arrow-down'\"\n  ></usa-icon>\n</button>\n"
        },
        {
            "name": "SdsSystemAlertComponent",
            "id": "component-SdsSystemAlertComponent-78b53dbbbd05e7b6d44833892e5fd6b4",
            "file": "libs/packages/layouts/src/lib/feature/system-alert/system-alert.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-system-alert",
            "styleUrls": [
                "./system-alert.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./system-alert.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "alerts",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "List of alerts to display. When the list contains only one item, the description of the alert will also\nbe displayed. Description text may contain html",
                    "description": "<p>List of alerts to display. When the list contains only one item, the description of the alert will also\nbe displayed. Description text may contain html</p>\n",
                    "line": 14,
                    "type": "Alert[]"
                }
            ],
            "outputsClass": [
                {
                    "name": "alertDismiss",
                    "defaultValue": "new EventEmitter<Alert>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 20,
                    "type": "EventEmitter"
                },
                {
                    "name": "detailsClicked",
                    "defaultValue": "new EventEmitter<Alert>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 18,
                    "type": "EventEmitter"
                },
                {
                    "name": "seeAllAlerts",
                    "defaultValue": "new EventEmitter()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 16,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [],
            "methodsClass": [
                {
                    "name": "onAlertClose",
                    "args": [
                        {
                            "name": "index",
                            "type": "number",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 28,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nRemoves the alert from input alerts array\n",
                    "description": "<p>Removes the alert from input alerts array</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 747,
                                "end": 752,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "index"
                            },
                            "type": "number",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 741,
                                "end": 746,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": "<ul>\n<li>index of the alert in array to remove</li>\n</ul>\n"
                        }
                    ]
                },
                {
                    "name": "onSeeAllAlertsClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 37,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nFired when 'See All Alerts' button is clicked. Emits the seeAllAlerts event\n",
                    "description": "<p>Fired when &#39;See All Alerts&#39; button is clicked. Emits the seeAllAlerts event</p>\n"
                },
                {
                    "name": "onShowDetailsClicked",
                    "args": [
                        {
                            "name": "alert",
                            "type": "Alert",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 47,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nFired when 'Show Details' for an alert is clicked. Emits the detailsClicked event\nwith the alert whose 'Show Details' link was clicked and toggles description view for\nthe alert\n",
                    "description": "<p>Fired when &#39;Show Details&#39; for an alert is clicked. Emits the detailsClicked event\nwith the alert whose &#39;Show Details&#39; link was clicked and toggles description view for\nthe alert</p>\n",
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 1328,
                                "end": 1333,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "alert"
                            },
                            "type": "Alert",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 1322,
                                "end": 1327,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": ""
                        }
                    ]
                },
                {
                    "name": "onToggleAlertsClicked",
                    "args": [
                        {
                            "name": "alertsContent",
                            "type": "HTMLElement",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 53,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\nOn mobile view - hide/display list of alerts based on toggle button",
                    "description": "<p>On mobile view - hide/display list of alerts based on toggle button</p>\n",
                    "jsdoctags": [
                        {
                            "name": "alertsContent",
                            "type": "HTMLElement",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, EventEmitter, Input, Output } from '@angular/core';\nimport { Alert } from './model/alert.model';\n\n@Component({\n  selector: 'sds-system-alert',\n  templateUrl: './system-alert.component.html',\n  styleUrls: ['./system-alert.component.scss']\n})\nexport class SdsSystemAlertComponent {\n\n  /** List of alerts to display. When the list contains only one item, the description of the alert will also\n   * be displayed. Description text may contain html\n   */\n  @Input() alerts: Alert[];\n  \n  @Output() seeAllAlerts = new EventEmitter();\n\n  @Output() detailsClicked = new EventEmitter<Alert>();\n\n  @Output() alertDismiss = new EventEmitter<Alert>();\n\n  constructor() { }\n\n  /**\n   * Removes the alert from input alerts array\n   * @param index - index of the alert in array to remove\n   */\n  onAlertClose(index: number) {\n    const dismissedAlert = this.alerts[index];\n    this.alerts.splice(index, 1);\n    this.alertDismiss.emit(dismissedAlert);\n  }\n\n  /**\n   * Fired when 'See All Alerts' button is clicked. Emits the seeAllAlerts event\n   */\n  onSeeAllAlertsClicked() {\n    this.seeAllAlerts.emit();\n  }\n\n  /**\n   * Fired when 'Show Details' for an alert is clicked. Emits the detailsClicked event\n   * with the alert whose 'Show Details' link was clicked and toggles description view for\n   * the alert\n   * @param alert \n   */\n  onShowDetailsClicked(alert: Alert) {\n    alert.displayDescription = !alert.displayDescription;\n    this.detailsClicked.emit(alert);\n  }\n\n  /** On mobile view - hide/display list of alerts based on toggle button */\n  onToggleAlertsClicked(alertsContent: HTMLElement) {\n    const isHidden = alertsContent.classList.contains('display-none');\n    if (isHidden) {\n      alertsContent.classList.remove('display-none');\n    } else {\n      alertsContent.classList.add('display-none');\n    }\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./system-alert.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [],
                "line": 20
            },
            "templateData": "<div class=\"sds-alert--header usa-grid\">\n  <div class=\"sds-alert--container\">\n    <div class=\"sds-mobile-alert grid-row\">\n      <div class=\"grid-col-auto padding-top-1\">\n        <usa-icon [icon]=\"'exclamation-triangle'\" [class]=\"'sds-alert--header__icon-mobile'\" [size]=\"'3x'\"></usa-icon>\n      </div>\n\n      <div class=\"grid-col-fill\">\n        <div class=\"grid-row tablet:display-none\">\n          <div class=\"grid-col-fill\">\n            <div class=\"sds-alert--header__label\">\n              You have {{alerts.length}} new alerts\n            </div>\n            <div>\n              <a href=\"javascript:void(0)\" (click)=\"onToggleAlertsClicked(alertsContent)\"\n                class=\"sds-alert--header__link simple-toggle\" aria-controls=\"collapseTarget\">\n                Show / Hide Alerts\n              </a>\n            </div>\n          </div>\n          <div class=\"grid-col-auto\">\n            <button (click)=\"onToggleAlertsClicked(alertsContent)\" aria-label=\"Show/Hide alerts\"\n              class=\"sds-button--circle usa-button--secondary simple-toggle\" aria-controls=\"collapseTarget\">\n              <usa-icon [icon]=\"'caret-down-fill'\" [size]=\"'1x'\"></usa-icon>\n            </button>\n          </div>\n        </div>\n        <div #alertsContent class=\"grid-row width-full display-none tablet:display-inline-block\" id=\"collapseTarget\">\n          <div class=\"grid-col-fill\">\n            <div class=\"grid-row\">\n              <ng-container [ngTemplateOutlet]=\"alerts && alerts.length == 1 ? singleAlert : multipleAlerts\"\n                [ngTemplateOutletContext]=\"{$implicit: alerts}\">\n              </ng-container>\n            </div>\n          </div>\n          <div class=\"tablet:grid-offset-1 tablet:grid-col-auto tablet:display-none\">\n            <div>\n              <button class=\"usa-button usa-button--secondary\" id=\"seeAllAlertsMobileBtn\"\n                (click)=\"onSeeAllAlertsClicked()\">See All Alerts</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"grid-offset-1 grid-col-auto display-none tablet:display-inline-block\">\n        <button class=\"usa-button usa-button--secondary margin-y-1\" id=\"seeAllAlertsTabletBtn\"\n          (click)=\"onSeeAllAlertsClicked()\">See All\n          Alerts</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #multipleAlerts let-alerts>\n  <div *ngFor=\"let alert of alerts; let i = index;\" class=\"grid-col-12\" [attr.id]=\"'alert' + i\">\n    <div class=\"sds-alert--header__content grid-row\">\n      <div class=\"grid-col-fill\">\n        <div class=\"sds-alert--header__label margin-right-1\" [innerHTML]=\"alert.header\"></div>\n        <a (click)=\"onShowDetailsClicked(alert)\" role=\"button\" href=\"javascript:void(0)\" class=\"sds-alert--header__link\"\n          [attr.aria-expanded]=\"alert.displayDescription\" [attr.aria-controls]=\"'alertDescription' + i\">\n          {{alert.displayDescription ? 'Hide Details' : 'Show Details'}}\n        </a>\n        <span class=\"sds-alert--header__date\">\n          {{alert.date | date: 'mediumDate'}}\n        </span>\n        <span aria-live=\"polite\" [attr.id]=\"'alertDescription' + i\" [sdsCollapse]=\"!alert.displayDescription\"\n          [innerHTML]=\"alert.description\">\n        </span>\n      </div>\n      <div class=\"grid-offset-1 grid-col-auto\">\n        <button (click)=\"onAlertClose(i)\" [attr.id]=\"'alert'+ i + 'CloseBtn'\"\n          class=\"usa-button sds-button--circle usa-button--secondary sds-alert--header__close simple-toggle\"\n          aria-label=\"Close Alert\" [attr.aria-controls]=\"'alert' + i\">\n          <usa-icon [icon]=\"'x'\"></usa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #singleAlert let-alerts>\n  <div class=\"grid-col-12\" id=\"alert0\">\n    <div class=\"sds-alert--header__content grid-row\">\n      <div class=\"grid-col-fill\">\n        <div class=\"sds-alert--header__label margin-right-1\" [innerHTML]=\"alerts[0].header\"></div>\n        <span class=\"sds-alert--header__date\">\n          {{alerts[0].date | date: 'mediumDate'}}\n        </span>\n        <span [innerHTML]=\"alerts[0].description\"></span>\n      </div>\n      <div class=\"grid-offset-1 grid-col-auto\">\n        <button (click)=\"onAlertClose(0)\" id=\"alert0CloseBtn\"\n          class=\"usa-button sds-button--circle usa-button--secondary sds-alert--header__close simple-toggle\"\n          aria-label=\"Close Alert\" aria-controls=\"alert0\">\n          <usa-icon [icon]=\"'x'\"></usa-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n"
        },
        {
            "name": "SdsWorkspaceTier2ItemBodyComponent",
            "id": "component-SdsWorkspaceTier2ItemBodyComponent-ced606ba78b1c3d28ecad58db1b69a1a",
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/item/item.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-workspace-tier2-item-body",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"text-semibold\">    <ng-content></ng-content>\n  </div>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'sds-workspace-tier2-item',\n  template: `<ng-content></ng-content>`,\n})\nexport class SdsWorkspaceTier2ItemComponent {}\n\n// ==============================================\n// ITEM HEAD\n// ==============================================\n@Component({\n  selector: 'sds-workspace-tier2-item-head',\n  template: ` <div class=\"margin-bottom-05\"><ng-content></ng-content>:</div> `,\n})\nexport class SdsWorkspaceTier2ItemHeadComponent {}\n\n// ==============================================\n// ITEM BODY\n// ==============================================\n@Component({\n  selector: 'sds-workspace-tier2-item-body',\n  template: `<div class=\"text-semibold\">\n    <ng-content></ng-content>\n  </div>`,\n})\nexport class SdsWorkspaceTier2ItemBodyComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsWorkspaceTier2ItemComponent",
            "id": "component-SdsWorkspaceTier2ItemComponent-ced606ba78b1c3d28ecad58db1b69a1a",
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/item/item.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-workspace-tier2-item",
            "styleUrls": [],
            "styles": [],
            "template": "<ng-content></ng-content>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'sds-workspace-tier2-item',\n  template: `<ng-content></ng-content>`,\n})\nexport class SdsWorkspaceTier2ItemComponent {}\n\n// ==============================================\n// ITEM HEAD\n// ==============================================\n@Component({\n  selector: 'sds-workspace-tier2-item-head',\n  template: ` <div class=\"margin-bottom-05\"><ng-content></ng-content>:</div> `,\n})\nexport class SdsWorkspaceTier2ItemHeadComponent {}\n\n// ==============================================\n// ITEM BODY\n// ==============================================\n@Component({\n  selector: 'sds-workspace-tier2-item-body',\n  template: `<div class=\"text-semibold\">\n    <ng-content></ng-content>\n  </div>`,\n})\nexport class SdsWorkspaceTier2ItemBodyComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsWorkspaceTier2ItemHeadComponent",
            "id": "component-SdsWorkspaceTier2ItemHeadComponent-ced606ba78b1c3d28ecad58db1b69a1a",
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/item/item.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-workspace-tier2-item-head",
            "styleUrls": [],
            "styles": [],
            "template": "<div class=\"margin-bottom-05\"><ng-content></ng-content>:</div>",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [],
            "outputsClass": [],
            "propertiesClass": [],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component } from '@angular/core';\n\n@Component({\n  selector: 'sds-workspace-tier2-item',\n  template: `<ng-content></ng-content>`,\n})\nexport class SdsWorkspaceTier2ItemComponent {}\n\n// ==============================================\n// ITEM HEAD\n// ==============================================\n@Component({\n  selector: 'sds-workspace-tier2-item-head',\n  template: ` <div class=\"margin-bottom-05\"><ng-content></ng-content>:</div> `,\n})\nexport class SdsWorkspaceTier2ItemHeadComponent {}\n\n// ==============================================\n// ITEM BODY\n// ==============================================\n@Component({\n  selector: 'sds-workspace-tier2-item-body',\n  template: `<div class=\"text-semibold\">\n    <ng-content></ng-content>\n  </div>`,\n})\nexport class SdsWorkspaceTier2ItemBodyComponent {}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsWorkspaceTier2LabelComponent",
            "id": "component-SdsWorkspaceTier2LabelComponent-f330318cd0ce7e45d978b6aedd094391",
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/label/label.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-workspace-tier2-item-label",
            "styleUrls": [],
            "styles": [],
            "template": "<span\n  class=\"text-semibold margin-right-2px\"\n  [class.padding-x-05]=\"size === 'small'\"\n  [class.padding-x-1]=\"size !== 'small'\"\n  [class.padding-y-05]=\"size !== 'small'\"\n  [style]=\"color ? colors[color] : 'border: 1px solid #969696'\"\n  [style.fontSize]=\"size === 'small' ? '0.75rem' : '0.87rem'\"\n>\n  <ng-content></ng-content>\n</span>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "color",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 19,
                    "type": "string"
                },
                {
                    "name": "size",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 20,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "colors",
                    "defaultValue": "{\n    purple:\n      'background-color: #fbdcff; color: #53068c; border: 1px solid #a776cc',\n    gray:\n      'background-color: #f9f9f7; color: #454540; border: 1px solid #cac9c0',\n  }",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 25
                },
                {
                    "name": "gray",
                    "defaultValue": "'background-color: #f9f9f7; color: #454540;'",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 23
                },
                {
                    "name": "purple",
                    "defaultValue": "'background-color: #fbdcff; color: #53068c;'",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 22
                }
            ],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-workspace-tier2-item-label',\n  template: `\n    <span\n      class=\"text-semibold margin-right-2px\"\n      [class.padding-x-05]=\"size === 'small'\"\n      [class.padding-x-1]=\"size !== 'small'\"\n      [class.padding-y-05]=\"size !== 'small'\"\n      [style]=\"color ? colors[color] : 'border: 1px solid #969696'\"\n      [style.fontSize]=\"size === 'small' ? '0.75rem' : '0.87rem'\"\n    >\n      <ng-content></ng-content>\n    </span>\n  `,\n})\nexport class SdsWorkspaceTier2LabelComponent {\n  @Input() color: string;\n  @Input() size: string;\n\n  purple = 'background-color: #fbdcff; color: #53068c;';\n  gray = 'background-color: #f9f9f7; color: #454540;';\n\n  colors = {\n    purple:\n      'background-color: #fbdcff; color: #53068c; border: 1px solid #a776cc',\n    gray:\n      'background-color: #f9f9f7; color: #454540; border: 1px solid #cac9c0',\n  };\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SdsWorkspaceTier2LabelDotComponent",
            "id": "component-SdsWorkspaceTier2LabelDotComponent-a23df9767b90bf6166ef94cbfab73fdb",
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/label/label-dot.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-workspace-tier2-label-dot",
            "styleUrls": [],
            "styles": [],
            "template": "<span\n  class=\"radius-pill margin-right-05 text-middle\"\n  [style]=\"base\"\n  [style.background-color]=\"colors[color] ? colors[color].background : null\"\n  [style.border]=\"colors[color] ? '1px solid' + colors[color].border : null\"\n>\n</span>\n",
            "templateUrl": [],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "color",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 16,
                    "type": "string"
                }
            ],
            "outputsClass": [],
            "propertiesClass": [
                {
                    "name": "base",
                    "defaultValue": "'padding: 1px 4px; font-size: 5px;'",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "",
                    "line": 18
                },
                {
                    "name": "colors",
                    "defaultValue": "{\n    red: { background: '#e59393', border: '#d43535' },\n    'light-blue': { background: '#9bdaf1', border: '#5c96ec' },\n    yellow: { background: '#fad980', border: '#e4b60d' },\n    'dark-gray': { background: '#5b616b', border: '#383838' },\n    gray: { background: '#e4e2e0', border: '#9e9e9e' },\n    green: { background: '#4aa564', border: '#3f820c' },\n  }",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "object",
                    "optional": false,
                    "description": "",
                    "line": 20
                }
            ],
            "methodsClass": [],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import { Component, Input } from '@angular/core';\n\n@Component({\n  selector: 'sds-workspace-tier2-label-dot',\n  template: `\n    <span\n      class=\"radius-pill margin-right-05 text-middle\"\n      [style]=\"base\"\n      [style.background-color]=\"colors[color] ? colors[color].background : null\"\n      [style.border]=\"colors[color] ? '1px solid' + colors[color].border : null\"\n    >\n    </span>\n  `,\n})\nexport class SdsWorkspaceTier2LabelDotComponent {\n  @Input() color: string;\n\n  base = 'padding: 1px 4px; font-size: 5px;';\n\n  colors = {\n    red: { background: '#e59393', border: '#d43535' },\n    'light-blue': { background: '#9bdaf1', border: '#5c96ec' },\n    yellow: { background: '#fad980', border: '#e4b60d' },\n    'dark-gray': { background: '#5b616b', border: '#383838' },\n    gray: { background: '#e4e2e0', border: '#9e9e9e' },\n    green: { background: '#4aa564', border: '#3f820c' },\n  };\n}\n",
            "assetsDirs": [],
            "styleUrlsData": "",
            "stylesData": ""
        },
        {
            "name": "SearchListLayoutComponent",
            "id": "component-SearchListLayoutComponent-040391d1abd020750200671fdaad1079",
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/search-list-layout.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "search-list-layout",
            "styleUrls": [
                "./search-list-layout.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./search-list-layout.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "configuration",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "configuration",
                    "description": "<p>configuration</p>\n",
                    "line": 65,
                    "type": "SearchListConfiguration"
                },
                {
                    "name": "customResultsTemplate",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "Allow to insert a customized template for no results to use",
                    "description": "<p>Allow to insert a customized template for no results to use</p>\n",
                    "line": 59,
                    "type": "TemplateRef<any>"
                },
                {
                    "name": "enableApiCall",
                    "defaultValue": "true",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 67,
                    "type": "boolean"
                },
                {
                    "name": "isHistoryEnabled",
                    "defaultValue": "true",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 61,
                    "type": "boolean"
                },
                {
                    "name": "service",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "Input service to be called when items change",
                    "description": "<p>Input service to be called when items change</p>\n",
                    "line": 54,
                    "type": "SearchListInterface"
                }
            ],
            "outputsClass": [
                {
                    "name": "sortFieldChange",
                    "defaultValue": "new EventEmitter<string>()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 69,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "bottom",
                    "defaultValue": "{ id: 'bottomPagination' }",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the bottom pagination control</p>\n",
                    "line": 105,
                    "rawdescription": "\n\nId of the bottom pagination control\n"
                },
                {
                    "name": "filterData",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "any",
                    "optional": false,
                    "description": "<p>Filter information</p>\n",
                    "line": 79,
                    "rawdescription": "\n\nFilter information\n",
                    "modifierKind": [
                        120
                    ]
                },
                {
                    "name": "formlySubscription",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "Subscription",
                    "optional": false,
                    "description": "",
                    "line": 85,
                    "modifierKind": [
                        120
                    ]
                },
                {
                    "name": "isDefaultModel",
                    "defaultValue": "true",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Set to true when either filter is empty or filter is equal to default model</p>\n",
                    "line": 74,
                    "rawdescription": "\n\nSet to true when either filter is empty or filter is equal to default model\n"
                },
                {
                    "name": "items",
                    "defaultValue": "[]",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "[]",
                    "optional": false,
                    "description": "<p>List of items to be displayed</p>\n",
                    "line": 115,
                    "rawdescription": "\n\nList of items to be displayed\n"
                },
                {
                    "name": "loading",
                    "defaultValue": "false",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "<p>Value to track whether API call in progress for purpose of showing loading\ntemplate</p>\n",
                    "line": 126,
                    "rawdescription": "\n\nValue to track whether API call in progress for purpose of showing loading\ntemplate\n"
                },
                {
                    "name": "loadingArray",
                    "defaultValue": "Array(25)",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "<p>Used in ngFor to create multiple copies of the same loading row.</p>\n",
                    "line": 131,
                    "rawdescription": "\n\nUsed in ngFor to create multiple copies of the same loading row.\n"
                },
                {
                    "name": "page",
                    "defaultValue": "{\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0,\n    default: true,\n  }",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Default Page setttings</p>\n",
                    "line": 90,
                    "rawdescription": "\n\nDefault Page setttings\n"
                },
                {
                    "name": "paginationChange",
                    "defaultValue": "new BehaviorSubject<object>(this.page)",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "<p>Page event listener</p>\n",
                    "line": 110,
                    "rawdescription": "\n\nPage event listener\n",
                    "modifierKind": [
                        122
                    ]
                },
                {
                    "name": "resultContentTemplate",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "<p>Child Template to be used to display the data for each item in the list of items</p>\n",
                    "line": 39,
                    "rawdescription": "\n\nChild Template to be used to display the data for each item in the list of items\n",
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "'resultContent'"
                        }
                    ]
                },
                {
                    "name": "sortField",
                    "defaultValue": "''",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "string",
                    "optional": false,
                    "description": "<p>sort value</p>\n",
                    "line": 120,
                    "rawdescription": "\n\nsort value\n",
                    "modifierKind": [
                        122
                    ]
                },
                {
                    "name": "top",
                    "defaultValue": "{ id: 'topPagination' }",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "object",
                    "optional": false,
                    "description": "<p>Id of the top pagination control</p>\n",
                    "line": 100,
                    "rawdescription": "\n\nId of the top pagination control\n"
                },
                {
                    "name": "totalItems",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "number",
                    "optional": false,
                    "description": "<p>Total number of items</p>\n",
                    "line": 84,
                    "rawdescription": "\n\nTotal number of items\n"
                },
                {
                    "name": "triggeredByPopState",
                    "defaultValue": "false",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "boolean",
                    "optional": false,
                    "description": "<p>Used to track whether update resulting in navigation is as the result of a\npopstate. in order to apply correct navigation logic</p>\n",
                    "line": 137,
                    "rawdescription": "\n\nUsed to track whether update resulting in navigation is as the result of a\npopstate. in order to apply correct navigation logic\n",
                    "modifierKind": [
                        120
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "convertToModel",
                    "args": [
                        {
                            "name": "filters",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 325,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "filters",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "convertToModelParser",
                    "args": [
                        {
                            "name": "str",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "decoder",
                            "type": "qs.defaultDecoder",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "charset",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "type",
                            "type": "\"key\" | \"value\"",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 339,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nDecoder for qs.parse to convert true / false strings to boolean values\n",
                    "description": "<p>Decoder for qs.parse to convert true / false strings to boolean values</p>\n",
                    "jsdoctags": [
                        {
                            "name": "str",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "decoder",
                            "type": "qs.defaultDecoder",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "charset",
                            "type": "string",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "type",
                            "type": "\"key\" | \"value\"",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "convertToParam",
                    "args": [
                        {
                            "name": "filters",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 286,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "filters",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "flatten",
                    "args": [
                        {
                            "name": "input",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "reference",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "optional": true
                        },
                        {
                            "name": "output",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "optional": true
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 215,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "input",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "reference",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "output",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "optional": true,
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "getHistoryModel",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 173,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "getUrlParams",
                    "args": [
                        {
                            "name": "queryString",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "{}",
                    "typeParameters": [],
                    "line": 298,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "queryString",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "isDefaultFilter",
                    "args": [
                        {
                            "name": "filter",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 209,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "filter",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "longFormatDate",
                    "args": [
                        {
                            "name": "prefix",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "value",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 351,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "prefix",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "value",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
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
                    "line": 164,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 147,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "onpopstate",
                    "args": [
                        {
                            "name": "event",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 140,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "decorators": [
                        {
                            "name": "HostListener",
                            "stringifiedArguments": "'window:popstate', ['$event']"
                        }
                    ],
                    "jsdoctags": [
                        {
                            "name": "event",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "onSelectChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 362,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nSorty by change event\n",
                    "description": "<p>Sorty by change event</p>\n"
                },
                {
                    "name": "shortFormatDate",
                    "args": [
                        {
                            "name": "prefix",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        },
                        {
                            "name": "value",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "any",
                    "typeParameters": [],
                    "line": 311,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "prefix",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        },
                        {
                            "name": "value",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateContent",
                    "args": [
                        {
                            "name": "triggeredByFilter",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "defaultValue": "false"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 371,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\ncalls service when updated\n",
                    "description": "<p>calls service when updated</p>\n",
                    "modifierKind": [
                        120
                    ],
                    "jsdoctags": [
                        {
                            "name": "triggeredByFilter",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "defaultValue": "false",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateFilter",
                    "args": [
                        {
                            "name": "filter",
                            "type": "any",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 198,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "rawdescription": "\n\nupdates the filter and set the page number to 1 and calls imported service\n",
                    "description": "<p>updates the filter and set the page number to 1 and calls imported service</p>\n",
                    "modifierKind": [
                        122
                    ],
                    "jsdoctags": [
                        {
                            "name": {
                                "pos": 4838,
                                "end": 4844,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "filter"
                            },
                            "type": "any",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "pos": 4832,
                                "end": 4837,
                                "flags": 4227072,
                                "modifierFlagsCache": 0,
                                "transformFlags": 0,
                                "kind": 78,
                                "escapedText": "param"
                            },
                            "comment": "<ul>\n<li>the updated filter model</li>\n</ul>\n"
                        }
                    ]
                },
                {
                    "name": "updateNavigation",
                    "args": [
                        {
                            "name": "triggeredByFilter",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "defaultValue": "false"
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 236,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "jsdoctags": [
                        {
                            "name": "triggeredByFilter",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "defaultValue": "false",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                },
                {
                    "name": "updateSearchResultsModel",
                    "args": [
                        {
                            "name": "historyModel",
                            "type": "ResultsModel",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 406,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "modifierKind": [
                        122
                    ],
                    "jsdoctags": [
                        {
                            "name": "historyModel",
                            "type": "ResultsModel",
                            "deprecated": false,
                            "deprecationMessage": "",
                            "tagName": {
                                "text": "param"
                            }
                        }
                    ]
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [
                {
                    "name": "window:popstate",
                    "args": [
                        {
                            "name": "event",
                            "type": "",
                            "deprecated": false,
                            "deprecationMessage": ""
                        }
                    ],
                    "argsDecorator": [
                        "$event"
                    ],
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 140
                }
            ],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  Input,\n  ContentChild,\n  TemplateRef,\n  Optional,\n  OnChanges,\n  SimpleChanges,\n  OnInit,\n  ChangeDetectorRef,\n  HostListener,\n  Output,\n  EventEmitter,\n} from '@angular/core';\nimport { BehaviorSubject, Subscription } from 'rxjs';\nimport * as qs from 'qs';\nimport {\n  SearchListInterface,\n  SearchListConfiguration,\n  ResultsModel,\n} from './model/search-list-layout.model';\nimport {\n  SDSFormlyUpdateComunicationService,\n  SDSFormlyUpdateModelService,\n} from '@gsa-sam/sam-formly';\nimport { Router, ActivatedRoute } from '@angular/router';\nimport * as _ from 'lodash-es';\nimport { Location } from '@angular/common';\n\n@Component({\n  selector: 'search-list-layout',\n  templateUrl: './search-list-layout.component.html',\n  styleUrls: ['./search-list-layout.component.scss'],\n})\nexport class SearchListLayoutComponent implements OnInit {\n  /**\n   * Child Template to be used to display the data for each item in the list of items\n   */\n  @ContentChild('resultContent') resultContentTemplate: TemplateRef<any>;\n\n  constructor(\n    private cdr: ChangeDetectorRef,\n    private router: Router,\n    private route: ActivatedRoute,\n    @Optional()\n    private formlyUpdateComunicationService: SDSFormlyUpdateComunicationService,\n    private filterUpdateModelService: SDSFormlyUpdateModelService,\n    private loc: Location\n  ) { }\n\n  /**\n   * Input service to be called when items change\n   */\n  @Input() service: SearchListInterface;\n\n  /**\n   * Allow to insert a customized template for no results to use\n   */\n  @Input() customResultsTemplate: TemplateRef<any>;\n\n  @Input() isHistoryEnabled = true;\n  /**\n   * configuration\n   */\n  @Input() configuration: SearchListConfiguration;\n\n  @Input() enableApiCall: boolean = true;\n\n  @Output() sortFieldChange = new EventEmitter<string>();\n\n  /**\n   * Set to true when either filter is empty or filter is equal to default model\n   */\n  isDefaultModel: boolean = true;\n\n  /**\n   * Filter information\n   */\n  private filterData: any;\n\n  /**\n   * Total number of items\n   */\n  totalItems: number;\n  private formlySubscription: Subscription;\n\n  /**\n   * Default Page setttings\n   */\n  page = {\n    pageNumber: 1,\n    pageSize: 25,\n    totalPages: 0,\n    default: true,\n  };\n\n  /**\n   * Id of the top pagination control\n   */\n  top = { id: 'topPagination' };\n\n  /**\n   * Id of the bottom pagination control\n   */\n  bottom = { id: 'bottomPagination' };\n\n  /**\n   * Page event listener\n   */\n  public paginationChange = new BehaviorSubject<object>(this.page);\n\n  /**\n   * List of items to be displayed\n   */\n  items = [];\n\n  /**\n   * sort value\n   */\n  public sortField = '';\n\n  /**\n   * Value to track whether API call in progress for purpose of showing loading\n   * template\n   */\n  loading = false;\n\n  /**\n   * Used in ngFor to create multiple copies of the same loading row.\n   */\n  loadingArray = Array(25);\n\n  /**\n   * Used to track whether update resulting in navigation is as the result of a\n   * popstate. in order to apply correct navigation logic\n   */\n  private triggeredByPopState: boolean = false;\n\n  @HostListener('window:popstate', ['$event'])\n  onpopstate(event) {\n    this.triggeredByPopState = true;\n    if (this.isHistoryEnabled) {\n      this.getHistoryModel();\n    }\n  }\n\n  ngOnInit() {\n    if (this.isHistoryEnabled) {\n      this.getHistoryModel();\n    }\n    this.sortField = this.sortField != null ? this.sortField : this.configuration.defaultSortValue;\n    this.paginationChange.subscribe(() => {\n      this.updateContent();\n    });\n    if (this.formlyUpdateComunicationService) {\n      this.formlySubscription = this.formlyUpdateComunicationService.filterUpdate.subscribe(\n        (filter) => {\n          this.updateFilter(filter);\n        }\n      );\n    }\n  }\n\n  ngOnDestroy() {\n    // Reset filter Model in update service\n    this.filterUpdateModelService.updateModel(null);\n\n    if (this.formlySubscription) {\n      this.formlySubscription.unsubscribe();\n    }\n  }\n\n  getHistoryModel() {\n    const queryString = window.location.search.substring(1);\n    const params: any = this.getUrlParams(queryString);\n    const paramModel: any = this.convertToModel(params);\n\n    this.page.default = true;\n    this.page.pageNumber = paramModel['page'] ? +paramModel['page'] : 1;\n    this.page.pageSize = paramModel['pageSize'] ? Number.parseInt(paramModel['pageSize']) : this.configuration.pageSize;\n\n    this.sortField = paramModel['sort'];\n    if (this.filterUpdateModelService) {\n      if (paramModel && paramModel['sfm']) {\n        this.filterUpdateModelService.updateModel(paramModel['sfm']);\n      } else if (!this.triggeredByPopState) {\n        this.filterUpdateModelService.updateModel(\n          this.configuration.defaultFilterValue\n        );\n      }\n    }\n  }\n\n  /**\n   * updates the filter and set the page number to 1 and calls imported service\n   * @param filter - the updated filter model\n   */\n  public updateFilter(filter: any) {\n    this.filterData = filter;\n    this.page.pageNumber = this.page.default ? this.page.pageNumber : 1;\n    this.page.default = filter ? false : true;\n    this.isDefaultFilter(filter);\n    if (this.isDefaultModel) {\n      this.items = [];\n    }\n    this.updateContent(true);\n  }\n\n  isDefaultFilter(filter) {\n    const cleanModel = this.flatten(filter);\n    const op = this.flatten(this.configuration.defaultFilterValue);\n    this.isDefaultModel = _.isEqual(cleanModel, op);\n  }\n\n  flatten(input, reference?, output?) {\n    output = output || {};\n    for (var key in input) {\n      var value = input[key];\n      if (value) {\n        key = reference ? reference + '.' + key : key;\n        if (typeof value === 'object' && value !== null) {\n          this.flatten(value, key, output);\n        } else {\n          // Treat true string as boolean value & ignore value of string 'false'\n          if (value === 'true') {\n            output[key] = true;\n          } else if (value != 'false') {\n            output[key] = value;\n          }\n        }\n      }\n    }\n    return output;\n  }\n\n  updateNavigation(triggeredByFilter = false) {\n    const queryString = window.location.search.substring(1);\n    let queryObj = qs.parse(queryString, { allowPrototypes: true });\n\n    let skipHistoryOnNav = false;\n\n    if (queryObj.hasOwnProperty('sfm')) {\n      queryObj['sfm'] = {};\n    }\n\n    // Prevent recursive navigation when adding default page to search\n    if (!queryObj.page || !queryObj.pageSize) {\n      skipHistoryOnNav = true;\n    }\n\n    queryObj['page'] = this.page.pageNumber\n    ? this.page.pageNumber.toString()\n    : '1';\n    queryObj['pageSize'] = this.page.pageSize\n      ? this.page.pageSize.toString()\n      : '25';\n\n    queryObj['sort'] = this.sortField ? this.sortField.toString() : '';\n    queryObj['sfm'] = this.filterData;\n    const params = this.convertToParam(queryObj);\n    /**\n     * loc.go updates URL but also updates history stack so that upon clicking\n     * back, the state which clicking forward would move user to is deleted by\n     * loc.go This state is preserved by router.navigate, so use router.navigate\n     * where we state needs to be preserved or we want the page jumped to the top.\n     * use loc.go only where we need the page to remain in place, and would normally\n     * overwrite the top of the history stack\n     */\n    if (!triggeredByFilter || this.triggeredByPopState) {\n      this.triggeredByPopState = false;\n      this.router.navigate([], {\n        relativeTo: this.route,\n        queryParams: params,\n        queryParamsHandling: this.configuration.queryParamsHandling,\n        fragment: window.location.hash?.length > 1 ? window.location.hash.substring(1) : undefined,\n        replaceUrl: skipHistoryOnNav,\n      });\n    } else {\n      const urlTree = this.router.parseUrl(this.loc.path());\n      urlTree.queryParams = params;\n      urlTree.fragment = window.location.hash?.length > 1 ? window.location.hash.substring(1) : undefined\n      this.loc.go(urlTree.toString());\n    }\n  }\n\n  convertToParam(filters) {\n    const encodedValues = qs.stringify(filters, {\n      skipNulls: true,\n      encode: false,\n      filter: this.shortFormatDate,\n    });\n    if (encodedValues) {\n      return this.getUrlParams(encodedValues);\n    } else {\n      return '';\n    }\n  }\n  getUrlParams(queryString) {\n    const target = {};\n    queryString.split('&').forEach((pair) => {\n      if (pair !== '') {\n        const splitpair = pair.split('=');\n        if (splitpair[1] != '' && splitpair[1] != 'false') {\n          target[splitpair[0]] = splitpair[1]\n        }\n      }\n    });\n    return target;\n  }\n\n  shortFormatDate(prefix, value) {\n    const fixDigit = (val) => {\n      return val.toString().length === 1 ? '0' + val : val;\n    };\n    const getFormattedDate = (date) =>\n      `${fixDigit(\n        date.getMonth() + 1\n      )}/${date.getDate()}/${date.getFullYear()}`;\n    if (value instanceof Date) {\n      value = getFormattedDate(new Date(value));\n    }\n    return value;\n  }\n\n  convertToModel(filters) {\n    let obj = {};\n    const encodedValues = qs.stringify(filters, {\n      skipNulls: true,\n      encode: false,\n      filter: this.longFormatDate,\n    });\n    obj = qs.parse(encodedValues, { decoder: this.convertToModelParser });\n    return obj;\n  }\n\n  /**\n   * Decoder for qs.parse to convert true / false strings to boolean values\n   */\n  convertToModelParser(str: string, decoder: qs.defaultDecoder, charset: string, type: 'key' | 'value') {\n    if (type === 'key') {\n      return decoder(str, decoder, charset);\n    }\n\n    if (str === 'true' || str === 'false') {\n      return str === 'true' ? true : false;\n    }\n\n    return decoder(str, decoder, charset);\n  }\n\n  longFormatDate(prefix, value) {\n    const val = Date.parse(value);\n    if (!isNaN(val) && isNaN(value)) {\n      value = new Date(val).toISOString();\n    }\n    return value;\n  }\n\n  /**\n   * Sorty by change event\n   */\n  onSelectChange() {\n    this.page.pageNumber = 1;\n    this.updateContent();\n    this.sortFieldChange.emit(this.sortField);\n  }\n\n  /**\n   * calls service when updated\n   */\n  private updateContent(triggeredByFilter = false) {\n    if (this.isHistoryEnabled) {\n      this.updateNavigation(triggeredByFilter);\n    }\n\n    if (\n      this.filterData &&\n      this.service &&\n      this.enableApiCall &&\n      !this.isDefaultModel\n    ) {\n      this.loading = true;\n\n      setTimeout(() => {\n        this.service\n          .getData({\n            page: this.page,\n            sortField: this.sortField,\n            filter: this.filterData,\n          })\n          .subscribe((result) => {\n            this.loading = false;\n            this.items = result.items;\n            this.page.totalPages = Math.ceil(\n              result.totalItems / this.page.pageSize\n            );\n            this.totalItems = result.totalItems;\n          },\n            (error) => this.loading = false,\n            () => this.loading = false\n          );\n      });\n    }\n  }\n\n  public updateSearchResultsModel(historyModel: ResultsModel) {\n    this.filterData = historyModel.filterModel;\n    this.page.default = historyModel.page || historyModel.sort ? true : false;\n    this.page.pageNumber = historyModel.page ? historyModel.page : 1;\n    this.sortField = historyModel.sort ? historyModel.sort : this.sortField;\n    if (this.filterUpdateModelService) {\n      if (historyModel && historyModel.filterModel) {\n        this.filterUpdateModelService.updateModel(historyModel.filterModel);\n      } else {\n        this.filterUpdateModelService.updateModel({});\n      }\n    }\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./search-list-layout.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [
                    {
                        "name": "cdr",
                        "type": "ChangeDetectorRef",
                        "deprecated": false,
                        "deprecationMessage": ""
                    },
                    {
                        "name": "router",
                        "type": "Router",
                        "deprecated": false,
                        "deprecationMessage": ""
                    },
                    {
                        "name": "route",
                        "type": "ActivatedRoute",
                        "deprecated": false,
                        "deprecationMessage": ""
                    },
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService",
                        "deprecated": false,
                        "deprecationMessage": ""
                    },
                    {
                        "name": "filterUpdateModelService",
                        "type": "SDSFormlyUpdateModelService",
                        "deprecated": false,
                        "deprecationMessage": ""
                    },
                    {
                        "name": "loc",
                        "type": "Location",
                        "deprecated": false,
                        "deprecationMessage": ""
                    }
                ],
                "line": 39,
                "jsdoctags": [
                    {
                        "name": "cdr",
                        "type": "ChangeDetectorRef",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "router",
                        "type": "Router",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "route",
                        "type": "ActivatedRoute",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "formlyUpdateComunicationService",
                        "type": "SDSFormlyUpdateComunicationService",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "filterUpdateModelService",
                        "type": "SDSFormlyUpdateModelService",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "loc",
                        "type": "Location",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit"
            ],
            "templateData": "<div class=\"grid-row\" *ngIf=\"items?.length\">\n  <div class=\"grid-col\">\n    <div class=\"grid-row\">\n      <div class=\"grid-col-auto\">\n        <sds-pagination class=\"tablet:grid-col display-block margin-top-3 padding-top-3\" [paginationConfiguration]=\"top\"\n          [(page)]=\"page\" (pageChange)=\"paginationChange.next($event)\" displayMode='results' [totalItems]=\"totalItems\">\n        </sds-pagination>\n      </div>\n      <div class=\"grid-col-fill\"></div>\n      <div class=\"grid-col-auto float-right\">\n        <div class=\"margin-left-1\">\n          <label class=\"usa-label font-sans-3xs text-italic text-base margin-top-1\" for=\"options\">\n            Sort by\n          </label>\n          <select (change)=\"onSelectChange()\" [(ngModel)]=\"sortField\"\n            class=\"usa-select usa-select--small sds-min-width-160 border-base-light\" id=\"options\">\n            <option *ngFor=\"let item of configuration.sortList\" [ngValue]=\"item.value\">\n              {{ item.text }}\n            </option>\n          </select>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"grid-row\">\n  <div class=\"grid-col-12\">\n    <div *ngIf=\"!loading; else loadingScreen\">\n      <sds-search-result-list [model]=\"items\" [customResultsTemplate]=\"customResultsTemplate\"\n        [isDefaultModel]=\"isDefaultModel\">\n        <ng-container>\n          <ng-template #resultContent let-item>\n              <ng-container *ngTemplateOutlet=\"resultContentTemplate, context: { $implicit: item }\">\n              </ng-container>\n          </ng-template>\n        </ng-container>\n      </sds-search-result-list>\n    </div>\n    <sds-pagination *ngIf=\"!loading && items?.length\" [paginationConfiguration]=\"bottom\" [(page)]=\"page\"\n      (pageChange)=\"paginationChange.next($event)\">\n    </sds-pagination>\n  </div>\n</div>\n\n<ng-template #loadingScreen>\n  <div *ngFor=\"let a of loadingArray\">\n    <hr>\n    <div class=\"grid-container padding-left-0\">\n      <div class=\"sds-load grid-row\">\n        <div class=\"grid-col-5 sds-load__title\"></div>\n      </div>\n      <div class=\"sds-load margin-top-1\">\n        <div class=\"tablet:grid-col-fill sds-load__element\"></div>\n      </div>\n      <div class=\"sds-load margin-top-1\">\n        <div class=\"grid-col-8 height-4 sds-load__content\"></div>\n      </div>\n    </div>\n  </div>\n  <hr>\n</ng-template>\n"
        },
        {
            "name": "SideToolbarComponent",
            "id": "component-SideToolbarComponent-7e6d23937dfc09a9a05222cf74c14bf3",
            "file": "libs/packages/layouts/src/lib/feature/side-toolbar/side-toolbar.component.ts",
            "encapsulation": [],
            "entryComponents": [],
            "inputs": [],
            "outputs": [],
            "providers": [],
            "selector": "sds-side-toolbar",
            "styleUrls": [
                "./side-toolbar.component.scss"
            ],
            "styles": [],
            "templateUrl": [
                "./side-toolbar.component.html"
            ],
            "viewProviders": [],
            "inputsClass": [
                {
                    "name": "responsiveButtonText",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 25,
                    "type": "string"
                },
                {
                    "name": "responsiveDialogOptions",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 27,
                    "type": "SdsDialogConfig"
                },
                {
                    "name": "responsiveSize",
                    "defaultValue": "480",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 30,
                    "type": "number"
                }
            ],
            "outputsClass": [
                {
                    "name": "responsiveDialog",
                    "defaultValue": "new EventEmitter()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 32,
                    "type": "EventEmitter"
                },
                {
                    "name": "responsiveView",
                    "defaultValue": "new EventEmitter()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "line": 33,
                    "type": "EventEmitter"
                }
            ],
            "propertiesClass": [
                {
                    "name": "isResponsiveView",
                    "defaultValue": "false",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "optional": false,
                    "description": "",
                    "line": 35
                },
                {
                    "name": "openResponsiveDialog",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "SdsDialogRef<TemplateRef<any>>",
                    "optional": false,
                    "description": "",
                    "line": 38,
                    "modifierKind": [
                        120
                    ]
                },
                {
                    "name": "subscription",
                    "defaultValue": "new Subscription()",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "Subscription",
                    "optional": false,
                    "description": "",
                    "line": 37,
                    "modifierKind": [
                        120
                    ]
                },
                {
                    "name": "template",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "TemplateRef<any>",
                    "optional": false,
                    "description": "",
                    "line": 22,
                    "decorators": [
                        {
                            "name": "ContentChild",
                            "stringifiedArguments": "TemplateRef"
                        }
                    ]
                }
            ],
            "methodsClass": [
                {
                    "name": "ngOnDestroy",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 49,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "ngOnInit",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 45,
                    "deprecated": false,
                    "deprecationMessage": ""
                },
                {
                    "name": "observeViewChange",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 75,
                    "deprecated": false,
                    "deprecationMessage": "",
                    "modifierKind": [
                        120
                    ]
                },
                {
                    "name": "onResponsiveViewButtonClicked",
                    "args": [],
                    "optional": false,
                    "returnType": "void",
                    "typeParameters": [],
                    "line": 53,
                    "deprecated": false,
                    "deprecationMessage": ""
                }
            ],
            "deprecated": false,
            "deprecationMessage": "",
            "hostBindings": [],
            "hostListeners": [],
            "description": "",
            "rawdescription": "\n",
            "type": "component",
            "sourceCode": "import {\n  Component,\n  ContentChild,\n  EventEmitter,\n  Input,\n  OnDestroy,\n  OnInit,\n  Output,\n  TemplateRef,\n} from '@angular/core';\nimport { SdsDialogRef, SdsDialogService } from '@gsa-sam/components';\nimport { BreakpointObserver } from '@angular/cdk/layout';\nimport { Subscription } from 'rxjs';\nimport { SdsDialogConfig } from '@gsa-sam/components';\n\n@Component({\n  selector: 'sds-side-toolbar',\n  templateUrl: './side-toolbar.component.html',\n  styleUrls: ['./side-toolbar.component.scss'],\n})\nexport class SideToolbarComponent implements OnInit, OnDestroy {\n  @ContentChild(TemplateRef) template: TemplateRef<any>;\n\n  // Text for button in responsive view\n  @Input() responsiveButtonText: string;\n\n  @Input() responsiveDialogOptions: SdsDialogConfig\n\n  // default value is size of mobile view in px\n  @Input() responsiveSize = 480;\n\n  @Output() responsiveDialog = new EventEmitter();\n  @Output() responsiveView = new EventEmitter();\n\n  isResponsiveView = false;\n\n  private subscription: Subscription = new Subscription();\n  private openResponsiveDialog: SdsDialogRef<TemplateRef<any>>;\n\n  constructor(\n    private sdsDialogService: SdsDialogService,\n    private breakpointObserver: BreakpointObserver // Will watch for changes between mobile and non-mobile screen size\n  ) {}\n\n  ngOnInit() {\n    this.observeViewChange();\n  }\n\n  ngOnDestroy() {\n    this.subscription.unsubscribe();\n  }\n\n  onResponsiveViewButtonClicked() {\n    let dialogOptions = {\n      height: '100vh',\n      width: '100vw',\n      maxWidth: '100vw',\n      maxHeight: '100vh',\n      hasBackdrop: false,\n      displayCloseBtn: false,\n      panelClass: ['sds-dialog--full']\n    };\n\n    let allOptions = this.responsiveDialogOptions ? {...dialogOptions, ...this.responsiveDialogOptions} : dialogOptions;\n\n    this.openResponsiveDialog = this.sdsDialogService.open(this.template, allOptions);\n\n    this.responsiveDialog.emit(this.openResponsiveDialog);\n\n    this.openResponsiveDialog.afterClosed().subscribe(() => {\n      this.openResponsiveDialog = undefined;\n    })\n  }\n\n  private observeViewChange() {\n    const breakpointUnsubscription = this.breakpointObserver\n      .observe([`(max-width: ${this.responsiveSize}px)`])\n      .subscribe((result) => {\n        if (result.matches) {\n          this.isResponsiveView = true;\n        } else {\n          this.isResponsiveView = false;\n          if (this.openResponsiveDialog) {\n            this.openResponsiveDialog.close();\n            this.openResponsiveDialog = undefined;\n            this.responsiveDialog.emit(this.openResponsiveDialog);\n          }\n        }\n\n        this.responsiveView.emit(this.isResponsiveView);\n      });\n\n    this.subscription.add(breakpointUnsubscription);\n  }\n}\n",
            "assetsDirs": [],
            "styleUrlsData": [
                {
                    "data": "",
                    "styleUrl": "./side-toolbar.component.scss"
                }
            ],
            "stylesData": "",
            "constructorObj": {
                "name": "constructor",
                "description": "",
                "deprecated": false,
                "deprecationMessage": "",
                "args": [
                    {
                        "name": "sdsDialogService",
                        "type": "SdsDialogService",
                        "deprecated": false,
                        "deprecationMessage": ""
                    },
                    {
                        "name": "breakpointObserver",
                        "type": "BreakpointObserver",
                        "deprecated": false,
                        "deprecationMessage": ""
                    }
                ],
                "line": 38,
                "jsdoctags": [
                    {
                        "name": "sdsDialogService",
                        "type": "SdsDialogService",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    },
                    {
                        "name": "breakpointObserver",
                        "type": "BreakpointObserver",
                        "deprecated": false,
                        "deprecationMessage": "",
                        "tagName": {
                            "text": "param"
                        }
                    }
                ]
            },
            "implements": [
                "OnInit",
                "OnDestroy"
            ],
            "templateData": "<div *ngIf=\"!isResponsiveView\">\n  <ng-container *ngTemplateOutlet=\"template\"></ng-container>\n</div>\n\n<div *ngIf=\"isResponsiveView\">\n  <button class=\"usa-button usa-button--accent-cool usa-button--hover text-secondary-dar\" id=\"responsiveViewButton\"\n    (click)=\"onResponsiveViewButtonClicked()\" [attr.aria-label]=\"responsiveButtonText\">\n    {{responsiveButtonText}}\n  </button>\n</div>"
        }
    ],
    "modules": [
        {
            "name": "PackagesLayoutsModule",
            "id": "module-PackagesLayoutsModule-2398c3f9b5ac0a3a0be257f14d2b0a78",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/packages-layouts.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\n@NgModule({\n  imports: [CommonModule]\n})\nexport class PackagesLayoutsModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": []
                },
                {
                    "type": "imports",
                    "elements": []
                },
                {
                    "type": "exports",
                    "elements": []
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
            "name": "SdsActionsMenuModule",
            "id": "module-SdsActionsMenuModule-639a7e438b9838f56b0e2014e293b9d5",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/actions-menu/actions-menu.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\n\nimport { SdsActionsMenuComponent } from './actions-menu.component';\nimport { SdsMenuModule } from '@gsa-sam/components';\nimport { CommonModule } from '@angular/common';\nimport { NgxBootstrapIconsModule, threeDotsVertical, x } from 'ngx-bootstrap-icons';\nimport { IconModule } from '@gsa-sam/ngx-uswds-icons';\n\n\n@NgModule({\n  imports: [CommonModule, IconModule, SdsMenuModule, NgxBootstrapIconsModule.pick({threeDotsVertical, x})],\n  exports: [SdsActionsMenuComponent],\n  declarations: [SdsActionsMenuComponent],\n  providers: []\n})\nexport class SdsActionsMenuModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsActionsMenuComponent"
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
                            "name": "SdsActionsMenuComponent"
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
            "name": "SdsFeedbackModule",
            "id": "module-SdsFeedbackModule-3d2bfc3df09d1459961c4a8c4773e365",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/sds-feedback/sds-feedback.module.ts",
            "methods": [],
            "sourceCode": "import { CommonModule } from \"@angular/common\";\nimport { NgModule } from \"@angular/core\";\nimport { ReactiveFormsModule } from \"@angular/forms\";\nimport { SdsCollapseModule } from \"@gsa-sam/components\";\nimport { NgxBootstrapIconsModule, arrowDownCircleFill, arrowUpCircleFill } from 'ngx-bootstrap-icons';\nimport { SdsFeedbackComponent } from \"./sds-feedback.component\";\nimport { IconModule } from '@gsa-sam/ngx-uswds-icons';\n\n\n@NgModule({\n  imports: [\n    CommonModule,\n    ReactiveFormsModule,\n    SdsCollapseModule,\n    IconModule,\n    NgxBootstrapIconsModule.pick({arrowDownCircleFill, arrowUpCircleFill})\n  ],\n  declarations: [\n    SdsFeedbackComponent\n  ],\n  exports: [\n    SdsFeedbackComponent,\n  ]\n})\nexport class SdsFeedbackModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsFeedbackComponent"
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
                            "name": "SdsFeedbackComponent"
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
            "id": "module-SdsFooterModule-d2121ea3ca35a558633da8c274e5dbe0",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/footer/footer.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { SdsFooterComponent } from './footer.component';\nimport { RouterModule } from '@angular/router';\nimport { SdsCollapseModule } from '@gsa-sam/components';\nimport { SdsExternalLinkDirectivesModule } from '@gsa-sam/components';\nimport { SdsAccordionModule } from '@gsa-sam/sam-material-extensions';\nimport { SdsFeedbackModule } from '../sds-feedback/sds-feedback.module';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    RouterModule,\n    SdsCollapseModule,\n    SdsExternalLinkDirectivesModule,\n    SdsAccordionModule,\n    SdsFeedbackModule,\n  ],\n  declarations: [SdsFooterComponent],\n  exports: [SdsFooterComponent],\n})\nexport class SdsFooterModule {}\n",
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
                            "name": "SdsFeedbackModule"
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
            "id": "module-SdsHeaderModule-c79aa635e8806aa504de468d6ecce28d",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/header/header.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { SdsHeaderComponent } from './header.component';\nimport { RouterModule } from '@angular/router';\nimport { SdsTopBannerModule } from '@gsa-sam/components';\n\nimport { A11yModule } from '@angular/cdk/a11y';\nimport { NgxBootstrapIconsModule, square, justifyLeft, circle, circleFill } from 'ngx-bootstrap-icons';\nimport { IconModule } from '@gsa-sam/ngx-uswds-icons';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    FormsModule,\n    RouterModule,\n    IconModule,\n    A11yModule,\n    SdsTopBannerModule,\n    NgxBootstrapIconsModule.pick({square, justifyLeft, circle, circleFill})\n  ],\n  declarations: [SdsHeaderComponent],\n  exports: [SdsHeaderComponent]\n})\nexport class SdsHeaderModule { }\n",
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
            "name": "SdsLandingButtonGroupModule",
            "id": "module-SdsLandingButtonGroupModule-aef2d61482d435b07c08a2ec488a8d73",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/landing/button-group/button-group.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { SdsLandingButtonGroupComponent } from './button-group.component';\nimport { SdsIconModule } from '@gsa-sam/components';\nimport { RouterModule } from '@angular/router';\n\n@NgModule({\n  imports: [CommonModule, RouterModule, SdsIconModule],\n  exports: [SdsLandingButtonGroupComponent],\n  declarations: [SdsLandingButtonGroupComponent],\n  providers: [],\n})\nexport class SdsLandingButtonGroupModule { }\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsLandingButtonGroupComponent"
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
                            "name": "SdsLandingButtonGroupComponent"
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
            "name": "SdsLandingCardModule",
            "id": "module-SdsLandingCardModule-ef6891686c234215f1ffb76a135e5183",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/landing/card/card.module.ts",
            "methods": [],
            "sourceCode": "import { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\n\nimport {\n  SdsLandingCardComponent,\n  SdsLandingCardTitleDirective,\n} from './card.component';\n\n@NgModule({\n  imports: [CommonModule],\n  exports: [SdsLandingCardComponent, SdsLandingCardTitleDirective],\n  declarations: [SdsLandingCardComponent, SdsLandingCardTitleDirective],\n  providers: [],\n})\nexport class SdsLandingCardModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsLandingCardComponent"
                        },
                        {
                            "name": "SdsLandingCardTitleDirective"
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
                            "name": "SdsLandingCardComponent"
                        },
                        {
                            "name": "SdsLandingCardTitleDirective"
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
            "name": "SdsLandingLinkModule",
            "id": "module-SdsLandingLinkModule-2fe43b2f413a6b0d00817f318af50823",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/landing/link/link.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { RouterModule } from '@angular/router';\n\nimport { SdsLandingLinkComponent } from './link.component';\n\n@NgModule({\n  declarations: [SdsLandingLinkComponent],\n  imports: [\n    CommonModule,\n    RouterModule\n  ],\n  exports: [SdsLandingLinkComponent]\n})\nexport class SdsLandingLinkModule { }\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsLandingLinkComponent"
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
                            "name": "SdsLandingLinkComponent"
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
            "name": "SdsLandingListModule",
            "id": "module-SdsLandingListModule-e5a10c4c34b770f790672a200abff4c9",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/landing/list/list.module.ts",
            "methods": [],
            "sourceCode": "import { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\nimport {\n  NgxBootstrapIconsModule,\n  arrowRightCircleFill,\n  fileEarmark,\n  questionCircle,\n  fileEarmarkText,\n  book,\n  file,\n  play,\n  search,\n  person,\n  info,\n  arrowRightCircle,\n  playBtn,\n  chevronLeft,\n  checkCircle,\n} from 'ngx-bootstrap-icons';\n\nimport { SdsIconModule } from '@gsa-sam/components';\nimport { SdsLandingListComponent } from './list.component';\nimport { SdsLandingLinkModule } from '../link/link.module';\n\nconst arrowRightCircleGreen = `<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right-circle bg-primary border-0 radius-pill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z\"/>\n</svg>`;\n\n@NgModule({\n  imports: [\n    CommonModule,\n    SdsLandingLinkModule,\n    SdsIconModule,\n    NgxBootstrapIconsModule,\n    NgxBootstrapIconsModule.pick({\n      arrowRightCircleFill,\n      fileEarmark,\n      arrowRightCircle,\n      questionCircle,\n      fileEarmarkText,\n      file,\n      book,\n      play,\n      search,\n      person,\n      info,\n      arrowRightCircleGreen,\n      playBtn,\n      chevronLeft,\n      checkCircle,\n    }),\n  ],\n  exports: [SdsLandingListComponent],\n  declarations: [SdsLandingListComponent],\n  providers: [],\n})\nexport class SdsLandingListModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsLandingListComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsLandingLinkModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsLandingListComponent"
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
            "name": "SdsLandingPageModule",
            "id": "module-SdsLandingPageModule-8880cc88f9d5abbfcebd506152b80798",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/landing/page/page.module.ts",
            "methods": [],
            "sourceCode": "import { CommonModule } from '@angular/common';\nimport { NgModule } from '@angular/core';\n\nimport {\n  SdsLandingPageComponent,\n  SdsLandingPageHeadComponent,\n  SdsLandingPageTitleDirective,\n  SdsLandingPageHeaderComponent,\n  SdsLandingPageLegacyComponent,\n  SdsLandingPageLegacyLogoDirective,\n  SdsLandingPageOverviewDirective,\n  SdsLandingPageOverviewParagraphDirective,\n  SdsLandingPageTileDirective,\n  SdsLandingPageCardDirective\n} from './page.component';\n\n@NgModule({\n  imports: [\n    CommonModule\n  ],\n  exports: [\n    SdsLandingPageComponent,\n    SdsLandingPageHeadComponent,\n    SdsLandingPageHeaderComponent,\n    SdsLandingPageTitleDirective,\n    SdsLandingPageLegacyComponent,\n    SdsLandingPageLegacyLogoDirective,\n    SdsLandingPageOverviewDirective,\n    SdsLandingPageOverviewParagraphDirective,\n    SdsLandingPageTileDirective,\n    SdsLandingPageCardDirective\n  ],\n  declarations: [\n    SdsLandingPageComponent,\n    SdsLandingPageHeadComponent,\n    SdsLandingPageHeaderComponent,\n    SdsLandingPageTitleDirective,\n    SdsLandingPageLegacyComponent,\n    SdsLandingPageLegacyLogoDirective,\n    SdsLandingPageOverviewDirective,\n    SdsLandingPageOverviewParagraphDirective,\n    SdsLandingPageTileDirective,\n    SdsLandingPageCardDirective\n  ],\n  providers: [],\n})\nexport class SdsLandingPageModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsLandingPageCardDirective"
                        },
                        {
                            "name": "SdsLandingPageComponent"
                        },
                        {
                            "name": "SdsLandingPageHeadComponent"
                        },
                        {
                            "name": "SdsLandingPageHeaderComponent"
                        },
                        {
                            "name": "SdsLandingPageLegacyComponent"
                        },
                        {
                            "name": "SdsLandingPageLegacyLogoDirective"
                        },
                        {
                            "name": "SdsLandingPageOverviewDirective"
                        },
                        {
                            "name": "SdsLandingPageOverviewParagraphDirective"
                        },
                        {
                            "name": "SdsLandingPageTileDirective"
                        },
                        {
                            "name": "SdsLandingPageTitleDirective"
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
                            "name": "SdsLandingPageCardDirective"
                        },
                        {
                            "name": "SdsLandingPageComponent"
                        },
                        {
                            "name": "SdsLandingPageHeadComponent"
                        },
                        {
                            "name": "SdsLandingPageHeaderComponent"
                        },
                        {
                            "name": "SdsLandingPageLegacyComponent"
                        },
                        {
                            "name": "SdsLandingPageLegacyLogoDirective"
                        },
                        {
                            "name": "SdsLandingPageOverviewDirective"
                        },
                        {
                            "name": "SdsLandingPageOverviewParagraphDirective"
                        },
                        {
                            "name": "SdsLandingPageTileDirective"
                        },
                        {
                            "name": "SdsLandingPageTitleDirective"
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
            "name": "SdsSubheaderModule",
            "id": "module-SdsSubheaderModule-cbf348a5e9b63f67d777b908b176d3bf",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/subheader/subheader.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\n\nimport {\n  SdsMenuModule,\n  SdsSearchModule,\n  SdsObserversModule,\n  SdsTruncateModule,\n} from '@gsa-sam/components';\nimport {\n  SdsSubheaderComponent,\n  SdsSubheaderActionsComponent,\n  SdsSubheaderDrawerComponent,\n  SdsDrawerContentComponent\n} from './subheader.component';\nimport { SdsActionsMenuModule } from '../actions-menu/actions-menu.module';\nimport { SdsDrawerCommunicationService } from './drawer-communication.service';\nimport { NgxBootstrapIconsModule, threeDotsVertical } from 'ngx-bootstrap-icons';\nimport { IconModule } from '@gsa-sam/ngx-uswds-icons';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    SdsMenuModule,\n    SdsObserversModule,\n    SdsSearchModule,\n    SdsTruncateModule,\n    SdsActionsMenuModule,\n    IconModule,\n    NgxBootstrapIconsModule.pick({threeDotsVertical})\n  ],\n  exports: [\n    SdsSubheaderComponent,\n    SdsSubheaderActionsComponent,\n    SdsSubheaderDrawerComponent,\n    SdsDrawerContentComponent,\n\n  ],\n  declarations: [\n    SdsSubheaderComponent,\n    SdsSubheaderActionsComponent,\n    SdsSubheaderDrawerComponent,\n    SdsDrawerContentComponent\n  ],\n  providers: [SdsDrawerCommunicationService]\n})\nexport class SdsSubheaderModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": [
                        {
                            "name": "SdsDrawerCommunicationService"
                        }
                    ]
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
                        }
                    ]
                },
                {
                    "type": "imports",
                    "elements": [
                        {
                            "name": "SdsActionsMenuModule"
                        }
                    ]
                },
                {
                    "type": "exports",
                    "elements": [
                        {
                            "name": "SdsDrawerContentComponent"
                        },
                        {
                            "name": "SdsSubheaderActionsComponent"
                        },
                        {
                            "name": "SdsSubheaderComponent"
                        },
                        {
                            "name": "SdsSubheaderDrawerComponent"
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
            "name": "SdsSystemAlertModule",
            "id": "module-SdsSystemAlertModule-761ede9261687760966005a0019d81aa",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/system-alert/system-alert.module.ts",
            "methods": [],
            "sourceCode": "import { CommonModule } from '@angular/common';\nimport { NgModule } from \"@angular/core\";\nimport { SdsCollapseModule } from '@gsa-sam/components';\nimport { SdsSystemAlertComponent } from './system-alert.component';\nimport { IconModule } from '@gsa-sam/ngx-uswds-icons';\n\n@NgModule({\n  imports: [\n    CommonModule,\n    IconModule,\n    SdsCollapseModule,\n  ],\n  declarations: [\n    SdsSystemAlertComponent,\n  ],\n  exports: [\n    SdsSystemAlertComponent\n  ]\n})\nexport class SdsSystemAlertModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsSystemAlertComponent"
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
                            "name": "SdsSystemAlertComponent"
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
            "name": "SdsWorkspaceTier2ItemModule",
            "id": "module-SdsWorkspaceTier2ItemModule-891462ca741b5dce0cc92d1d9218896a",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/item/item.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport {\n  SdsWorkspaceTier2ItemBodyComponent,\n  SdsWorkspaceTier2ItemComponent,\n  SdsWorkspaceTier2ItemHeadComponent,\n} from './item.component';\n\n@NgModule({\n  imports: [],\n  exports: [\n    SdsWorkspaceTier2ItemComponent,\n    SdsWorkspaceTier2ItemHeadComponent,\n    SdsWorkspaceTier2ItemBodyComponent,\n  ],\n  declarations: [\n    SdsWorkspaceTier2ItemComponent,\n    SdsWorkspaceTier2ItemHeadComponent,\n    SdsWorkspaceTier2ItemBodyComponent,\n  ],\n  providers: [],\n})\nexport class SdsWorkspaceTier2ItemModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsWorkspaceTier2ItemBodyComponent"
                        },
                        {
                            "name": "SdsWorkspaceTier2ItemComponent"
                        },
                        {
                            "name": "SdsWorkspaceTier2ItemHeadComponent"
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
                            "name": "SdsWorkspaceTier2ItemBodyComponent"
                        },
                        {
                            "name": "SdsWorkspaceTier2ItemComponent"
                        },
                        {
                            "name": "SdsWorkspaceTier2ItemHeadComponent"
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
            "name": "SdsWorkspaceTier2LabelModule",
            "id": "module-SdsWorkspaceTier2LabelModule-b43c745f2b3f84a672e5b81c01acd34a",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/workspace-tier-2/label/label.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { SdsWorkspaceTier2LabelDotComponent } from './label-dot.component';\nimport { SdsWorkspaceTier2LabelComponent } from './label.component';\n\n@NgModule({\n  imports: [],\n  exports: [\n    SdsWorkspaceTier2LabelComponent,\n    SdsWorkspaceTier2LabelDotComponent,\n  ],\n  declarations: [\n    SdsWorkspaceTier2LabelComponent,\n    SdsWorkspaceTier2LabelDotComponent,\n  ],\n  providers: [],\n})\nexport class SdsWorkspaceTier2LabelModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SdsWorkspaceTier2LabelComponent"
                        },
                        {
                            "name": "SdsWorkspaceTier2LabelDotComponent"
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
                            "name": "SdsWorkspaceTier2LabelComponent"
                        },
                        {
                            "name": "SdsWorkspaceTier2LabelDotComponent"
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
            "name": "SearchListServiceModule",
            "id": "module-SearchListServiceModule-bce4c4ac7a74fefb2405b3ad39882596",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/search-list-layout/search-list-layout.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { FormsModule } from '@angular/forms';\nimport { SearchListLayoutComponent } from './search-list-layout.component';\nimport {\n  PaginationModule,\n  SdsSearchResultListModule,\n} from '@gsa-sam/components';\n\n@NgModule({\n  declarations: [SearchListLayoutComponent],\n  imports: [\n    CommonModule,\n    FormsModule,\n    PaginationModule,\n    SdsSearchResultListModule,\n  ],\n  exports: [SearchListLayoutComponent],\n})\nexport class SearchListServiceModule {}\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SearchListLayoutComponent"
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
                            "name": "SearchListLayoutComponent"
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
            "name": "SideToolbarModule",
            "id": "module-SideToolbarModule-5a9dff1943d6376ea968eaaf0c9cc3b6",
            "description": "",
            "deprecationMessage": "",
            "deprecated": false,
            "file": "libs/packages/layouts/src/lib/feature/side-toolbar/side-toolbar.module.ts",
            "methods": [],
            "sourceCode": "import { NgModule } from '@angular/core';\nimport { CommonModule } from '@angular/common';\nimport { SdsDialogService, SdsDialogModule } from '@gsa-sam/components';\nimport { SideToolbarComponent } from './side-toolbar.component';\n\n@NgModule({\n  declarations: [SideToolbarComponent],\n  imports: [\n    CommonModule, \n    SdsDialogModule,\n  ], exports: [SideToolbarComponent],\n  providers: [\n    SdsDialogService,\n  ]\n})\nexport class SideToolbarModule { }\n",
            "children": [
                {
                    "type": "providers",
                    "elements": []
                },
                {
                    "type": "declarations",
                    "elements": [
                        {
                            "name": "SideToolbarComponent"
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
                            "name": "SideToolbarComponent"
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
                "name": "arrowRightCircleGreen",
                "ctype": "miscellaneous",
                "subtype": "variable",
                "file": "libs/packages/layouts/src/lib/feature/landing/list/list.module.ts",
                "deprecated": false,
                "deprecationMessage": "",
                "type": "",
                "defaultValue": "`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right-circle bg-primary border-0 radius-pill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z\"/>\n</svg>`"
            }
        ],
        "functions": [],
        "typealiases": [
            {
                "name": "Link",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "XOR<InternalLink | ExternalLink>",
                "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
                "deprecated": false,
                "deprecationMessage": "",
                "description": "",
                "kind": 174
            },
            {
                "name": "Without",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "",
                "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
                "deprecated": false,
                "deprecationMessage": "",
                "description": "",
                "kind": 191
            },
            {
                "name": "XOR",
                "ctype": "miscellaneous",
                "subtype": "typealias",
                "rawtype": "",
                "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
                "deprecated": false,
                "deprecationMessage": "",
                "description": "",
                "kind": 185
            }
        ],
        "enumerations": [],
        "groupedVariables": {
            "libs/packages/layouts/src/lib/feature/landing/list/list.module.ts": [
                {
                    "name": "arrowRightCircleGreen",
                    "ctype": "miscellaneous",
                    "subtype": "variable",
                    "file": "libs/packages/layouts/src/lib/feature/landing/list/list.module.ts",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "type": "",
                    "defaultValue": "`<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-arrow-right-circle bg-primary border-0 radius-pill\" viewBox=\"0 0 16 16\">\n  <path fill-rule=\"evenodd\" d=\"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z\"/>\n</svg>`"
                }
            ]
        },
        "groupedFunctions": {},
        "groupedEnumerations": {},
        "groupedTypeAliases": {
            "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts": [
                {
                    "name": "Link",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "XOR<InternalLink | ExternalLink>",
                    "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "description": "",
                    "kind": 174
                },
                {
                    "name": "Without",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "",
                    "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "description": "",
                    "kind": 191
                },
                {
                    "name": "XOR",
                    "ctype": "miscellaneous",
                    "subtype": "typealias",
                    "rawtype": "",
                    "file": "libs/packages/layouts/src/lib/feature/landing/link/link.model.ts",
                    "deprecated": false,
                    "deprecationMessage": "",
                    "description": "",
                    "kind": 185
                }
            ]
        }
    }
};

export default LAYOUTS;