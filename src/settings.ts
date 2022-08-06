import joplin from "api";
import { SettingItemType } from "api/types";
import {
    ENABLE_IMAGE_ENHANCEMENT,
    ENABLE_LOCAL_PDF_PREVIEW,
    ENABLE_QUICK_COMMANDS,
    ENABLE_TABLE_FORMATTER,
    ENABLE_PSEUDOCODE,
    ENABLE_ADMONITION_CM_RENDER,
    ENABLE_FRONT_MATTER,
    ENABLE_COLORFUL_QUOTE,
    ENABLE_LINK_FOLDER,
    ENABLE_SEARCH_REPLACE,
    ENABLE_INLINE_MARKER,
    ENABLE_FOCUS_MODE,
    ENABLE_INDENT_BORDER, ENABLE_TASK_RENDER, ENABLE_MATH_RENDER, ENABLE_MERMAID_RENDER,
} from "./common";

export namespace settings {
    const SECTION = 'FeatureSettings';

    export async function register() {
        await joplin.settings.registerSection(SECTION, {
            label: "Joplin Enhancement",
            iconName: "fas fa-tools",
        });

        let PLUGIN_SETTINGS = {};

        PLUGIN_SETTINGS[ENABLE_TABLE_FORMATTER] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable table formatter in editor',
            description: "Allow you to navigate between table cells, format table code, add row/column, align, and delete column with shortcut and tool buttons. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_PSEUDOCODE] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable pseudocode in fenced code block',
            description: "Render pseudocode in fenced code block by pseudocode.js + Katex. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_LOCAL_PDF_PREVIEW] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable "PDF Preview for Local File" in viewer',
            description: "Show preview for local pdf files just like the preview for the attached pdf file. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_IMAGE_ENHANCEMENT] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Allow to set image size and caption',
            description: "![Image Caption](path){width=80%}. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_QUICK_COMMANDS] = {
            value: false,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable quick commands for quick input',
            description: "Insert mermaid graph, tables, etc. with /commands. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_ADMONITION_CM_RENDER] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable the admonition styling in the markdown editor',
            description: "Decorate the admonition area in the editor. [It conflicts with the 'Align wrapped list items' of Rich Markdown plugin]. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_FRONT_MATTER] = {
            value: false,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable front matter markdown-it rule',
            description: "It just ignores the front matter instead of rendering them as content between two lines. It is used to allow other plugins can take use of the front matter without breaking the rendered html. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_COLORFUL_QUOTE] = {
            value: false,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable hackmd style quote',
            description: "Render the quote with the given color [color=red], name [name=SeptemberHX], and date [date=20220202]. (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_LINK_FOLDER] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable link & image folder',
            description: "Fold your link & image for clean UI (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_SEARCH_REPLACE] = {
            value: false,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable Search & Replace in note editor',
            description: "It will take over the original Ctrl/Cmd + F behavior with top-right search & replace widget (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_INLINE_MARKER] = {
            value: false,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Enable inline marker in note editor and pdf',
            description: "[tag::content] (requires restart)",
        }

        PLUGIN_SETTINGS[ENABLE_FOCUS_MODE] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Hide side panels by one button',
            description: "requires restart",
        }

        PLUGIN_SETTINGS[ENABLE_INDENT_BORDER] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Add a lightgray border for indented list items',
            description: "It NEEDS joplin-plugin-rich-markdown plugin installed. It requires restart",
        }

        PLUGIN_SETTINGS[ENABLE_TASK_RENDER] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Render markdown task to clickable checkbox in markdown editor',
            description: "From https://github.com/Zettlr/Zettlr. It requires restart",
        }

        PLUGIN_SETTINGS[ENABLE_MATH_RENDER] = {
            value: false,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Render markdown inline/block latex to math in markdown editor',
            description: "It significantly hurts your joplin's performance, especially with lots of math block. It requires restart",
        }

        PLUGIN_SETTINGS[ENABLE_MERMAID_RENDER] = {
            value: true,
            public: true,
            section: SECTION,
            type: SettingItemType.Bool,
            label: 'Render mermaid code block to svg in markdown editor',
            description: "It requires restart",
        }

        await joplin.settings.registerSettings(PLUGIN_SETTINGS);
    }
}
