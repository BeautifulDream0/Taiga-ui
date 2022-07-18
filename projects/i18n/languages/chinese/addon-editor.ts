import {TuiLanguageEditor} from '@taiga-ui/i18n/interfaces';

export const TUI_CHINESE_LANGUAGE_ADDON_EDITOR: TuiLanguageEditor = {
    colorSelectorModeNames: [`纯色`, `渐变色`],
    toolbarTools: {
        undo: `撤消`,
        redo: `重做`,
        font: `字体`,
        fontStyle: `字体样式`,
        fontSize: `字体大小`,
        bold: `加粗`,
        italic: `斜体`,
        underline: `下划线`,
        strikeThrough: `删除线`,
        justify: `对齐`,
        justifyLeft: `左对齐`,
        justifyCenter: `中心对齐`,
        justifyRight: `右对齐`,
        justifyFull: `两端对齐`,
        list: `列表`,
        indent: `缩进`,
        outdent: `减小缩进`,
        unorderedList: `无序列表`,
        orderedList: `有序列表`,
        quote: `引用`,
        foreColor: `颜色`,
        backColor: `背景颜色`,
        hiliteColor: `高亮颜色`,
        clear: `清除`,
        link: `链接`,
        attach: `附加文件`,
        tex: `插入 TeX`,
        code: `代码`,
        image: `插入图片`,
        insertHorizontalRule: `插入水平线`,
        superscript: `上标`,
        subscript: `下标`,
        insertTable: `插入表格`,
        insertGroup: `Insert group`,
        removeGroup: `Remove group`,
        mergeCells: `合并单元格`,
        splitCells: `拆分单元格`,
        rowsColumnsManaging: `管理行和列`,
        cellColor: `单元格颜色`,
        setDetails: `详细信息`,
        removeDetails: `删除详细信息`,
    },
    editorTableCommands: [
        [`在前面插入列`, `在后面插入列`],
        [`在前面插入行`, `在后面插入行`],
        [`删除列`, `删除行`],
    ],
    editorCodeOptions: [`文中代码`, `代码块`],
    editorFontOptions: {
        small: `小的`,
        large: `大的`,
        normal: `普通的`,
        title: `标题`,
        subtitle: `副标题`,
    },
};
