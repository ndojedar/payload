import type { Language } from '../types.js'

export const slTranslations = {
  authentication: {
    account: 'Račun',
    accountOfCurrentUser: 'Račun trenutnega uporabnika',
    accountVerified: 'Račun uspešno preverjen.',
    alreadyActivated: 'Že aktivirano',
    alreadyLoggedIn: 'Že prijavljeni',
    apiKey: 'API ključ',
    authenticated: 'Avtenticirano',
    backToLogin: 'Nazaj na prijavo',
    beginCreateFirstUser: 'Za začetek ustvarite prvega uporabnika.',
    changePassword: 'Spremeni geslo',
    checkYourEmailForPasswordReset:
      'Preverite svoj e-poštni predal za povezavo, ki vam bo omogočila varno ponastaviti geslo.',
    confirmGeneration: 'Potrdi generiranje',
    confirmPassword: 'Potrdi geslo',
    createFirstUser: 'Ustvari prvega uporabnika',
    emailNotValid: 'Vneseni e-poštni naslov ni veljaven',
    emailOrUsername: 'E-pošta ali uporabniško ime',
    emailSent: 'E-pošta poslana',
    emailVerified: 'E-pošta uspešno preverjena.',
    enableAPIKey: 'Omogoči API ključ',
    failedToUnlock: 'Odklepanje ni uspelo',
    forceUnlock: 'Prisili odklepanje',
    forgotPassword: 'Pozabljeno geslo',
    forgotPasswordEmailInstructions:
      'Vnesite svoj e-poštni naslov. Prejeli boste e-pošto z navodili za ponastavitev gesla.',
    forgotPasswordQuestion: 'Ste pozabili geslo?',
    forgotPasswordUsernameInstructions:
      'Vnesite svoje uporabniško ime. Navodila za ponastavitev gesla bodo poslana na e-poštni naslov, povezan z vašim uporabniškim imenom.',
    generate: 'Generiraj',
    generateNewAPIKey: 'Generiraj nov API ključ',
    generatingNewAPIKeyWillInvalidate:
      'Generiranje novega API ključa bo <1>razveljavilo</1> prejšnji ključ. Ste prepričani, da želite nadaljevati?',
    lockUntil: 'Zakleni do',
    logBackIn: 'Ponovno se prijavi',
    loggedIn: 'Za prijavo z drugim uporabnikom se morate najprej <0>odjaviti</0>.',
    loggedInChangePassword:
      'Za spremembo gesla pojdite na svoj <0>račun</0> in tam uredite svoje geslo.',
    loggedOutInactivity: 'Odjavljeni ste bili zaradi neaktivnosti.',
    loggedOutSuccessfully: 'Uspešno ste se odjavili.',
    loggingOut: 'Odjavljanje...',
    login: 'Prijava',
    loginAttempts: 'Poskusi prijave',
    loginUser: 'Prijavi uporabnika',
    loginWithAnotherUser: 'Za prijavo z drugim uporabnikom se morate najprej <0>odjaviti</0>.',
    logOut: 'Odjava',
    logout: 'Odjava',
    logoutSuccessful: 'Odjava uspešna.',
    logoutUser: 'Odjavi uporabnika',
    newAccountCreated:
      'Pravkar je bil ustvarjen nov račun za dostop do <a href="{{serverURL}}">{{serverURL}}</a> Prosimo, kliknite na naslednjo povezavo ali jo prilepite v svoj brskalnik za potrditev e-pošte: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Po potrditvi e-pošte se boste lahko uspešno prijavili.',
    newAPIKeyGenerated: 'Nov API ključ generiran.',
    newPassword: 'Novo geslo',
    passed: 'Avtentikacija uspešna',
    passwordResetSuccessfully: 'Geslo uspešno ponastavljeno.',
    resetPassword: 'Ponastavi geslo',
    resetPasswordExpiration: 'Potek ponastavitve gesla',
    resetPasswordToken: 'Žeton za ponastavitev gesla',
    resetYourPassword: 'Ponastavite svoje geslo',
    stayLoggedIn: 'Ostani prijavljen',
    successfullyRegisteredFirstUser: 'Uspešno registriran prvi uporabnik.',
    successfullyUnlocked: 'Uspešno odklenjeno',
    tokenRefreshSuccessful: 'Osvežitev žetona uspešna.',
    unableToVerify: 'Ni mogoče preveriti',
    username: 'Uporabniško ime',
    usernameNotValid: 'Vneseno uporabniško ime ni veljavno',
    verified: 'Preverjeno',
    verifiedSuccessfully: 'Uspešno preverjeno',
    verify: 'Preveri',
    verifyUser: 'Preveri uporabnika',
    verifyYourEmail: 'Potrdite svojo e-pošto',
    youAreInactive:
      'Že nekaj časa niste bili aktivni in boste kmalu samodejno odjavljeni zaradi varnosti. Želite ostati prijavljeni?',
    youAreReceivingResetPassword:
      'To sporočilo ste prejeli, ker ste vi (ali nekdo drug) zahtevali ponastavitev gesla za vaš račun. Prosimo, kliknite na naslednjo povezavo ali jo prilepite v svoj brskalnik za dokončanje postopka:',
    youDidNotRequestPassword:
      'Če tega niste zahtevali, prezrite to e-pošto in vaše geslo bo ostalo nespremenjeno.',
  },
  error: {
    accountAlreadyActivated: 'Ta račun je že aktiviran.',
    autosaving: 'Pri samodejnem shranjevanju tega dokumenta je prišlo do težave.',
    correctInvalidFields: 'Prosimo, popravite neveljavna polja.',
    deletingFile: 'Pri brisanju datoteke je prišlo do napake.',
    deletingTitle:
      'Pri brisanju {{title}} je prišlo do napake. Prosimo, preverite povezavo in poskusite znova.',
    emailOrPasswordIncorrect: 'Vnesena e-pošta ali geslo je napačno.',
    followingFieldsInvalid_one: 'Naslednje polje je neveljavno:',
    followingFieldsInvalid_other: 'Naslednja polja so neveljavna:',
    incorrectCollection: 'Napačna zbirka',
    invalidFileType: 'Neveljaven tip datoteke',
    invalidFileTypeValue: 'Neveljaven tip datoteke: {{value}}',
    loadingDocument: 'Pri nalaganju dokumenta z ID-jem {{id}} je prišlo do težave.',
    localesNotSaved_one: 'Naslednjega jezika ni bilo mogoče shraniti:',
    localesNotSaved_other: 'Naslednjih jezikov ni bilo mogoče shraniti:',
    logoutFailed: 'Odjava ni uspela.',
    missingEmail: 'Manjka e-pošta.',
    missingIDOfDocument: 'Manjka ID dokumenta za posodobitev.',
    missingIDOfVersion: 'Manjka ID različice.',
    missingRequiredData: 'Manjkajo zahtevani podatki.',
    noFilesUploaded: 'Nobena datoteka ni bila naložena.',
    noMatchedField: 'Za "{{label}}" ni bilo najdeno ujemajoče se polje',
    notAllowedToAccessPage: 'Nimate dovoljenja za dostop do te strani.',
    notAllowedToPerformAction: 'Nimate dovoljenja za izvedbo tega dejanja.',
    notFound: 'Zahtevani vir ni bil najden.',
    noUser: 'Ni uporabnika',
    previewing: 'Pri predogledu tega dokumenta je prišlo do težave.',
    problemUploadingFile: 'Pri nalaganju datoteke je prišlo do težave.',
    tokenInvalidOrExpired: 'Žeton je neveljaven ali je potekel.',
    tokenNotProvided: 'Žeton ni bil posredovan.',
    unableToDeleteCount: 'Ni bilo mogoče izbrisati {{count}} od {{total}} {{label}}.',
    unableToUpdateCount: 'Ni bilo mogoče posodobiti {{count}} od {{total}} {{label}}.',
    unauthorized: 'Neavtorizirano, za to zahtevo morate biti prijavljeni.',
    unknown: 'Prišlo je do neznane napake.',
    unPublishingDocument: 'Pri umiku objave tega dokumenta je prišlo do težave.',
    unspecific: 'Prišlo je do napake.',
    userEmailAlreadyRegistered: 'Uporabnik s tem e-poštnim naslovom je že registriran.',
    userLocked: 'Ta uporabnik je zaklenjen zaradi prevelikega števila neuspešnih poskusov prijave.',
    usernameAlreadyRegistered: 'Uporabnik s tem uporabniškim imenom je že registriran.',
    usernameOrPasswordIncorrect: 'Vneseno uporabniško ime ali geslo je napačno.',
    valueMustBeUnique: 'Vrednost mora biti unikatna',
    verificationTokenInvalid: 'Žeton za preverjanje je neveljaven.',
  },
  fields: {
    addLabel: 'Dodaj {{label}}',
    addLink: 'Dodaj povezavo',
    addNew: 'Dodaj novo',
    addNewLabel: 'Dodaj nov {{label}}',
    addRelationship: 'Dodaj povezavo',
    addUpload: 'Dodaj nalaganje',
    block: 'blok',
    blocks: 'bloki',
    blockType: 'Tip bloka',
    chooseBetweenCustomTextOrDocument:
      'Izberite med vnosom URL-ja po meri ali povezavo na drug dokument.',
    chooseDocumentToLink: 'Izberite dokument za povezavo',
    chooseFromExisting: 'Izberite iz obstoječih',
    chooseLabel: 'Izberite {{label}}',
    collapseAll: 'Strni vse',
    customURL: 'URL po meri',
    editLabelData: 'Uredi podatke {{label}}',
    editLink: 'Uredi povezavo',
    editRelationship: 'Uredi povezavo',
    enterURL: 'Vnesite URL',
    internalLink: 'Notranja povezava',
    itemsAndMore: '{{items}} in še {{count}}',
    labelRelationship: '{{label}} povezava',
    latitude: 'Zemljepisna širina',
    linkedTo: 'Povezano z <0>{{label}}</0>',
    linkType: 'Tip povezave',
    longitude: 'Zemljepisna dolžina',
    newLabel: 'Nov {{label}}',
    openInNewTab: 'Odpri v novem zavihku',
    passwordsDoNotMatch: 'Gesli se ne ujemata.',
    relatedDocument: 'Povezan dokument',
    relationTo: 'Povezava z',
    removeRelationship: 'Odstrani povezavo',
    removeUpload: 'Odstrani nalaganje',
    saveChanges: 'Shrani spremembe',
    searchForBlock: 'Išči blok',
    selectExistingLabel: 'Izberi obstoječ {{label}}',
    selectFieldsToEdit: 'Izberi polja za urejanje',
    showAll: 'Pokaži vse',
    swapRelationship: 'Zamenjaj povezavo',
    swapUpload: 'Zamenjaj nalaganje',
    textToDisplay: 'Besedilo za prikaz',
    toggleBlock: 'Preklopi blok',
    uploadNewLabel: 'Naloži nov {{label}}',
  },
  general: {
    aboutToDelete: 'Izbrisali boste {{label}} <1>{{title}}</1>. Ste prepričani?',
    aboutToDeleteCount_many: 'Izbrisali boste {{count}} {{label}}',
    aboutToDeleteCount_one: 'Izbrisali boste {{count}} {{label}}',
    aboutToDeleteCount_other: 'Izbrisali boste {{count}} {{label}}',
    addBelow: 'Dodaj spodaj',
    addFilter: 'Dodaj filter',
    adminTheme: 'Tema skrbnika',
    and: 'In',
    anotherUser: 'Drug uporabnik',
    anotherUserTakenOver: 'Drug uporabnik je prevzel urejanje tega dokumenta.',
    applyChanges: 'Uporabi spremembe',
    ascending: 'Naraščajoče',
    automatic: 'Samodejno',
    backToDashboard: 'Nazaj na nadzorno ploščo',
    cancel: 'Prekliči',
    changesNotSaved:
      'Vaše spremembe niso shranjene. Če zapustite zdaj, boste izgubili svoje spremembe.',
    clearAll: 'Počisti vse',
    close: 'Zapri',
    collapse: 'Strni',
    collections: 'Zbirke',
    columns: 'Stolpci',
    columnToSort: 'Stolpec za razvrščanje',
    confirm: 'Potrdi',
    confirmDeletion: 'Potrdi brisanje',
    confirmDuplication: 'Potrdi podvajanje',
    copied: 'Kopirano',
    copy: 'Kopiraj',
    create: 'Ustvari',
    created: 'Ustvarjeno',
    createdAt: 'Ustvarjeno',
    createNew: 'Ustvari novo',
    createNewLabel: 'Ustvari nov {{label}}',
    creating: 'Ustvarjanje',
    creatingNewLabel: 'Ustvarjanje novega {{label}}',
    currentlyEditing:
      'trenutno ureja ta dokument. Če prevzamete, jim bo onemogočeno nadaljnje urejanje in lahko izgubijo neshranjene spremembe.',
    custom: 'Po meri',
    dark: 'Temno',
    dashboard: 'Nadzorna plošča',
    delete: 'Izbriši',
    deletedCountSuccessfully: 'Uspešno izbrisano {{count}} {{label}}.',
    deletedSuccessfully: 'Uspešno izbrisano.',
    deleting: 'Brisanje...',
    depth: 'Globina',
    descending: 'Padajoče',
    deselectAllRows: 'Odznači vse vrstice',
    document: 'Dokument',
    documentLocked: 'Dokument zaklenjen',
    documents: 'Dokumenti',
    duplicate: 'Podvoji',
    duplicateWithoutSaving: 'Podvoji brez shranjevanja sprememb',
    edit: 'Uredi',
    editedSince: 'Urejeno od',
    editing: 'Urejanje',
    editingLabel_many: 'Urejanje {{count}} {{label}}',
    editingLabel_one: 'Urejanje {{count}} {{label}}',
    editingLabel_other: 'Urejanje {{count}} {{label}}',
    editingTakenOver: 'Urejanje prevzeto',
    editLabel: 'Uredi {{label}}',
    email: 'E-pošta',
    emailAddress: 'E-poštni naslov',
    enterAValue: 'Vnesite vrednost',
    error: 'Napaka',
    errors: 'Napake',
    fallbackToDefaultLocale: 'Uporabi privzeti jezik',
    false: 'Ne',
    filter: 'Filter',
    filters: 'Filtri',
    filterWhere: 'Filtriraj {{label}} kjer',
    globals: 'Globalne nastavitve',
    goBack: 'Nazaj',
    isEditing: 'ureja',
    language: 'Jezik',
    lastModified: 'Zadnja sprememba',
    leaveAnyway: 'Vseeno zapusti',
    leaveWithoutSaving: 'Zapusti brez shranjevanja',
    light: 'Svetlo',
    livePreview: 'Predogled',
    loading: 'Nalaganje',
    locale: 'Jezik',
    locales: 'Jeziki',
    menu: 'Meni',
    moveDown: 'Premakni dol',
    moveUp: 'Premakni gor',
    newPassword: 'Novo geslo',
    next: 'Naprej',
    noFiltersSet: 'Ni nastavljenih filtrov',
    noLabel: '<Brez {{label}}>',
    none: 'Brez',
    noOptions: 'Ni možnosti',
    noResults:
      'Ni najdenih {{label}}. Ali {{label}} še ne obstajajo ali pa ne ustrezajo filtrom, ki ste jih določili zgoraj.',
    notFound: 'Ni najdeno',
    nothingFound: 'Nič ni najdeno',
    noValue: 'Ni vrednosti',
    of: 'od',
    only: 'Samo',
    open: 'Odpri',
    or: 'Ali',
    order: 'Vrstni red',
    pageNotFound: 'Stran ni najdena',
    password: 'Geslo',
    payloadSettings: 'Nastavitve Payloada',
    perPage: 'Na stran: {{limit}}',
    previous: 'Prejšnji',
    remove: 'Odstrani',
    reset: 'Ponastavi',
    row: 'Vrstica',
    rows: 'Vrstice',
    save: 'Shrani',
    saving: 'Shranjevanje...',
    searchBy: 'Išči po {{label}}',
    selectAll: 'Izberi vse {{count}} {{label}}',
    selectAllRows: 'Izberi vse vrstice',
    selectedCount: '{{count}} {{label}} izbranih',
    selectValue: 'Izberi vrednost',
    showAllLabel: 'Pokaži vse {{label}}',
    sorryNotFound: 'Oprostite - ničesar ni mogoče najti, kar bi ustrezalo vaši zahtevi.',
    sort: 'Razvrsti',
    sortByLabelDirection: 'Razvrsti po {{label}} {{direction}}',
    stayOnThisPage: 'Ostani na tej strani',
    submissionSuccessful: 'Oddaja uspešna.',
    submit: 'Oddaj',
    submitting: 'Oddajanje...',
    success: 'Uspeh',
    successfullyCreated: '{{label}} uspešno ustvarjen.',
    successfullyDuplicated: '{{label}} uspešno podvojen.',
    takeOver: 'Prevzemi',
    thisLanguage: 'Slovenščina',
    titleDeleted: '{{label}} "{{title}}" uspešno izbrisan.',
    true: 'Da',
    unauthorized: 'Nepooblaščeno',
    unsavedChangesDuplicate: 'Imate neshranjene spremembe. Želite nadaljevati s podvajanjem?',
    untitled: 'Brez naslova',
    updatedAt: 'Posodobljeno',
    updatedCountSuccessfully: 'Uspešno posodobljeno {{count}} {{label}}.',
    updatedSuccessfully: 'Uspešno posodobljeno.',
    updating: 'Posodabljanje',
    uploading: 'Nalaganje',
    uploadingBulk: 'Nalaganje {{current}} od {{total}}',
    user: 'Uporabnik',
    username: 'Uporabniško ime',
    users: 'Uporabniki',
    value: 'Vrednost',
    viewReadOnly: 'Ogled samo za branje',
    welcome: 'Dobrodošli',
  },
  operators: {
    contains: 'vsebuje',
    equals: 'je enako',
    exists: 'obstaja',
    intersects: 'se seka',
    isGreaterThan: 'je večje od',
    isGreaterThanOrEqualTo: 'je večje ali enako',
    isIn: 'je v',
    isLessThan: 'je manjše od',
    isLessThanOrEqualTo: 'je manjše ali enako',
    isLike: 'je podobno',
    isNotEqualTo: 'ni enako',
    isNotIn: 'ni v',
    near: 'blizu',
    within: 'znotraj',
  },
  upload: {
    addFile: 'Dodaj datoteko',
    addFiles: 'Dodaj datoteke',
    bulkUpload: 'Množično nalaganje',
    crop: 'Obreži',
    cropToolDescription:
      'Povlecite kote izbranega območja, narišite novo območje ali prilagodite vrednosti spodaj.',
    dragAndDrop: 'Povlecite in spustite datoteko',
    dragAndDropHere: 'ali povlecite in spustite datoteko sem',
    editImage: 'Uredi sliko',
    fileName: 'Ime datoteke',
    fileSize: 'Velikost datoteke',
    filesToUpload: 'Datoteke za nalaganje',
    fileToUpload: 'Datoteka za nalaganje',
    focalPoint: 'Žarišče',
    focalPointDescription:
      'Povlecite žarišče neposredno na predogledu ali prilagodite vrednosti spodaj.',
    height: 'Višina',
    lessInfo: 'Manj informacij',
    moreInfo: 'Več informacij',
    pasteURL: 'Prilepi URL',
    previewSizes: 'Velikosti predogleda',
    selectCollectionToBrowse: 'Izberite zbirko za brskanje',
    selectFile: 'Izberite datoteko',
    setCropArea: 'Nastavi območje obrezovanja',
    setFocalPoint: 'Nastavi žarišče',
    sizes: 'Velikosti',
    sizesFor: 'Velikosti za {{label}}',
    width: 'Širina',
  },
  validation: {
    emailAddress: 'Vnesite veljaven e-poštni naslov.',
    enterNumber: 'Vnesite veljavno številko.',
    fieldHasNo: 'To polje nima {{label}}',
    greaterThanMax: '{{value}} je večje od največje dovoljene {{label}} {{max}}.',
    invalidInput: 'To polje ima neveljaven vnos.',
    invalidSelection: 'To polje ima neveljavno izbiro.',
    invalidSelections: 'To polje ima naslednje neveljavne izbire:',
    lessThanMin: '{{value}} je manjše od najmanjše dovoljene {{label}} {{min}}.',
    limitReached: 'Dosežena omejitev, dodati je mogoče samo {{max}} elementov.',
    longerThanMin: 'Ta vrednost mora biti daljša od najmanjše dolžine {{minLength}} znakov.',
    notValidDate: '"{{value}}" ni veljaven datum.',
    required: 'To polje je obvezno.',
    requiresAtLeast: 'To polje zahteva vsaj {{count}} {{label}}.',
    requiresNoMoreThan: 'To polje zahteva največ {{count}} {{label}}.',
    requiresTwoNumbers: 'To polje zahteva dve številki.',
    shorterThanMax: 'Ta vrednost mora biti krajša od največje dolžine {{maxLength}} znakov.',
    trueOrFalse: 'To polje je lahko samo enako true ali false.',
    username:
      'Vnesite veljavno uporabniško ime. Lahko vsebuje črke, številke, vezaje, pike in podčrtaje.',
    validUploadID: 'To polje ni veljaven ID nalaganja.',
  },
  version: {
    type: 'Tip',
    aboutToPublishSelection: 'Objavili boste vse {{label}} v izboru. Ste prepričani?',
    aboutToRestore:
      'Ta {{label}} dokument boste obnovili v stanje, v katerem je bil {{versionDate}}.',
    aboutToRestoreGlobal:
      'Globalni {{label}} boste obnovili v stanje, v katerem je bil {{versionDate}}.',
    aboutToRevertToPublished:
      'Spremembe tega dokumenta boste povrnili v objavljeno stanje. Ste prepričani?',
    aboutToUnpublish: 'Ta dokument boste umaknili iz objave. Ste prepričani?',
    aboutToUnpublishSelection: 'Umaknili boste iz objave vse {{label}} v izboru. Ste prepričani?',
    autosave: 'Samodejno shranjevanje',
    autosavedSuccessfully: 'Samodejno shranjeno uspešno.',
    autosavedVersion: 'Samodejno shranjena različica',
    changed: 'Spremenjeno',
    compareVersion: 'Primerjaj različico z:',
    confirmPublish: 'Potrdi objavo',
    confirmRevertToSaved: 'Potrdi vrnitev na shranjeno',
    confirmUnpublish: 'Potrdi umik objave',
    confirmVersionRestoration: 'Potrdi obnovitev različice',
    currentDocumentStatus: 'Trenutni {{docStatus}} dokument',
    currentDraft: 'Trenutni osnutek',
    currentPublishedVersion: 'Trenutna objavljena različica',
    draft: 'Osnutek',
    draftSavedSuccessfully: 'Osnutek uspešno shranjen.',
    lastSavedAgo: 'Nazadnje shranjeno pred {{distance}}',
    noFurtherVersionsFound: 'Ni najdenih nadaljnjih različic',
    noRowsFound: 'Ni najdenih {{label}}',
    noRowsSelected: 'Ni izbranih {{label}}',
    preview: 'Predogled',
    previouslyPublished: 'Predhodno objavljeno',
    problemRestoringVersion: 'Pri obnavljanju te različice je prišlo do težave',
    publish: 'Objavi',
    publishAll: 'Objavi vse',
    publishChanges: 'Objavi spremembe',
    published: 'Objavljeno',
    publishIn: 'Objavi v {{locale}}',
    publishing: 'Objavljanje',
    restoreAsDraft: 'Obnovi kot osnutek',
    restoredSuccessfully: 'Uspešno obnovljeno.',
    restoreThisVersion: 'Obnovi to različico',
    restoring: 'Obnavljanje...',
    reverting: 'Razveljavljanje...',
    revertToPublished: 'Vrni na objavljeno',
    saveDraft: 'Shrani osnutek',
    selectLocales: 'Izberite jezike za prikaz',
    selectVersionToCompare: 'Izberite različico za primerjavo',
    showingVersionsFor: 'Prikaz različic za:',
    showLocales: 'Prikaži jezike:',
    status: 'Status',
    unpublish: 'Razveljavi objavo',
    unpublishing: 'Razveljavljanje objave...',
    version: 'Različica',
    versionCount_many: 'Najdenih {{count}} različic',
    versionCount_none: 'Ni najdenih različic',
    versionCount_one: 'Najdena {{count}} različica',
    versionCount_other: 'Najdene {{count}} različice',
    versionCreatedOn: '{{version}} ustvarjena:',
    versionID: 'ID različice',
    versions: 'Različice',
    viewingVersion: 'Ogled različice za {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Ogled različice za globalni {{entityLabel}}',
    viewingVersions: 'Ogled različic za {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Ogled različic za globalni {{entityLabel}}',
  },
}

export const sl: Language = {
  dateFNSKey: 'sl-SI',
  translations: slTranslations,
}
