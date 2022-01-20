import {LanguageKit} from '@taiga-ui/i18n/interfaces';

export const TUI_GERMAN_LANGUAGE_KIT: LanguageKit = {
    cancel: 'Abbrechen',
    done: 'Fertig',
    more: 'Mehr',
    otherDate: 'Anderes Datum...',
    mobileCalendarTexts: ['Tag auswählen', 'Zeitraum auswählen'],
    range: ['von', 'bis'],
    countTexts: ['Plus', 'Minus'],
    time: {
        'HH:MM': 'HH:MM',
        'HH:MM:SS': 'HH:MM:SS',
        'HH:MM:SS.MSS': 'HH:MM:SS.MSS',
    },
    dateTexts: {
        DMY: 'dd.mm.yyyy',
        MDY: 'mm.dd.yyyy',
        YMD: 'yyyy.mm.dd',
    },
    digitalInformationUnits: ['B', 'KB', 'MB'],
    passwordTexts: ['Passwort anzeigen', 'Passwort ausblenden'],
    copyTexts: ['Kopieren', 'Kopiert'],
    shortCalendarMonths: [
        'Jan',
        'Feb',
        'Mär',
        'Apr',
        'Mai',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Okt',
        'Nov',
        'Dez',
    ],
    pagination: ['Vorherige Seite', 'Nächste Seite'],
    fileTexts: {
        loadingError: 'Fehler beim Laden',
        preview: 'Vorschau',
        remove: 'Entfernen',
    },
    inputFileTexts: {
        defaultLabelSingle: 'oder einzelne Datei hier ablegen',
        defaultLabelMultiple: 'oder mehrere Dateien hier ablegen',
        defaultLinkSingle: 'Datei auswählen',
        defaultLinkMultiple: 'Dateien auswählen',
        maxSizeRejectionReason:
            'Die Dateigröße überschreitet die maximal zulässige Größe von ',
        formatRejectionReason: 'Ungültiges Dateiformat',
        drop: 'Datei hier ablegen',
        dropMultiple: 'Dateien hier ablegen',
    },
};
