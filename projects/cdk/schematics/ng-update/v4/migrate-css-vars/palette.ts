export const DEPRECATED_VARS = {
    '--tui-font-text-l-2': '--tui-font-text-ui-l',
    '--tui-font-text-m-2': '--tui-font-text-ui-m',
    '--tui-font-text-s-2': '--tui-font-text-ui-s',
    '--tui-font-text-xs-2': '--tui-font-text-ui-xs',
    '--tui-base-01': '--tui-background-base',
    '--tui-base-02': '--tui-background-base-alt',
    '--tui-base-03': '--tui-background-neutral-1-hover',
    '--tui-base-04': '--tui-border-normal',
    '--tui-base-05': '--tui-border-hover',
    '--tui-base-06': '--tui-text-secondary',
    '--tui-base-07': '--tui-background-accent-opposite-pressed',
    '--tui-base-08': '--tui-background-accent-opposite-hover',
    '--tui-base-09': '--tui-background-accent-opposite',
    '--tui-primary': '--tui-background-accent-1',
    '--tui-primary-hover': '--tui-background-accent-1-hover',
    '--tui-primary-active': '--tui-background-accent-1-pressed',
    '--tui-primary-text': '--tui-text-primary-on-accent-1',
    '--tui-secondary': '--tui-background-neutral-1',
    '--tui-secondary-hover': '--tui-background-neutral-1-hover',
    '--tui-secondary-active': '--tui-background-neutral-1-pressed',
    '--tui-accent': '--tui-background-accent-2',
    '--tui-accent-hover': '--tui-background-accent-2-hover',
    '--tui-accent-active': '--tui-background-accent-2-pressed',
    '--tui-accent-text': '--tui-text-primary-on-accent-2',
    '--tui-selection': '--tui-service-selected-text',
    '--tui-focus': '--tui-border-focus',
    '--tui-clear': '--tui-background-neutral-1',
    '--tui-clear-disabled': '--tui-background-neutral-1',
    '--tui-clear-hover': '--tui-background-neutral-1-hover',
    '--tui-clear-active': '--tui-background-neutral-1-pressed',
    '--tui-elevation-01': '--tui-background-elevation-1',
    '--tui-elevation-02': '--tui-background-elevation-2',
    '--tui-error-fill': '--tui-status-negative',
    '--tui-error-bg': '--tui-status-negative-pale',
    '--tui-error-bg-hover': '--tui-status-negative-pale-hover',
    '--tui-success-fill': '--tui-status-positive',
    '--tui-success-bg': '--tui-status-positive-pale',
    '--tui-success-bg-hover': '--tui-status-positive-pale-hover',
    '--tui-warning-fill': '--tui-status-warning',
    '--tui-warning-bg': '--tui-status-warning-pale',
    '--tui-warning-bg-hover': '--tui-status-warning-pale-hover',
    '--tui-info-fill': '--tui-status-info',
    '--tui-info-bg': '--tui-status-info-pale',
    '--tui-info-bg-hover': '--tui-status-info-pale-hover',
    '--tui-neutral-fill': '--tui-status-neutral',
    '--tui-neutral-bg': '--tui-background-neutral-1',
    '--tui-neutral-bg-hover': '--tui-background-neutral-1-hover',
    '--tui-text-01': '--tui-text-primary',
    '--tui-text-02': '--tui-text-secondary',
    '--tui-text-03': '--tui-text-tertiary',
    '--tui-link': '--tui-text-action',
    '--tui-link-hover': '--tui-text-action-hover',
    '--tui-positive': '--tui-text-positive',
    '--tui-positive-hover': '--tui-text-positive-hover',
    '--tui-negative': '--tui-text-negative',
    '--tui-negative-hover': '--tui-text-negative-hover',
    '--tui-support-': '--tui-chart-categorical-',
    '--tui-chart-': '--tui-chart-categorical-0',
    '--tui-clear-inverse': '--tui-background-neutral-1',
    '--tui-clear-inverse-hover': '--tui-background-neutral-1-hover',
    '--tui-clear-inverse-active': '--tui-background-neutral-1-pressed',
    '--tui-error-fill-night': '--tui-status-negative',
    '--tui-error-bg-night': '--tui-status-negative-pale',
    '--tui-error-bg-night-hover': '--tui-status-negative-pale-hover',
    '--tui-success-fill-night': '--tui-status-positive',
    '--tui-success-bg-night': '--tui-status-positive-pale',
    '--tui-success-bg-night-hover': '--tui-status-positive-pale-hover',
    '--tui-warning-fill-night': '--tui-status-warning',
    '--tui-warning-bg-night': '--tui-status-warning-pale',
    '--tui-warning-bg-night-hover': '--tui-status-warning-pale-hover',
    '--tui-info-fill-night': '--tui-status-info',
    '--tui-info-bg-night': '--tui-status-info-pale',
    '--tui-info-bg-night-hover': '--tui-status-info-pale-hover',
    '--tui-neutral-fill-night': '--tui-status-neutral',
    '--tui-neutral-bg-night': '--tui-background-neutral-1',
    '--tui-neutral-bg-night-hover': '--tui-background-neutral-1-hover',
    '--tui-text-01-night': '--tui-text-primary',
    '--tui-text-02-night': '--tui-text-secondary',
    '--tui-text-03-night': '--tui-text-tertiary',
    '--tui-link-night': '--tui-text-action',
    '--tui-link-night-hover': '--tui-text-action-hover',
    '--tui-positive-night': '--tui-status-positive',
    '--tui-positive-night-hover': '--tui-status-positive',
    '--tui-negative-night': '--tui-status-negative',
    '--tui-negative-night-hover': '--tui-status-negative',
    '--tui-shadow': 'var(--tui-shadow-small)',
    '--tui-shadow-hover': 'var(--tui-shadow-small-hover)',
    '--tui-shadow-dropdown': 'var(--tui-shadow-medium)',
    '--tui-shadow-modal': 'var(--tui-shadow-popup)',
    '--tui-shadow-sidebar': 'var(--tui-shadow-medium)',
    '--tui-shadow-navigation': 'var(--tui-shadow-small)',
    '--tui-shadow-sheet': 'var(--tui-shadow-popup)',
};

export const NIGHT_VAR_COMMENT =
    'TODO: use tuiTheme="dark" on an element to switch colors to dark theme';

export const DEPRECATE_VARS_WITH_COMMENT = [
    '--tui-clear-inverse',
    '--tui-clear-inverse-hover',
    '--tui-clear-inverse-active',
    '--tui-error-fill-night',
    '--tui-error-bg-night',
    '--tui-error-bg-night-hover',
    '--tui-success-fill-night',
    '--tui-success-bg-night',
    '--tui-success-bg-night-hover',
    '--tui-warning-fill-night',
    '--tui-warning-bg-night',
    '--tui-warning-bg-night-hover',
    '--tui-info-fill-night',
    'tui-info-bg-night',
    '--tui-info-bg-night-hover',
    '--tui-neutral-fill-night',
    '--tui-neutral-bg-night',
    '--tui-neutral-bg-night-hover',
    '--tui-text-01-night',
    '--tui-text-02-night',
    '--tui-text-03-night',
    '--tui-link-night',
    '--tui-link-night-hover',
    '--tui-positive-night',
    '--tui-positive-night-hover',
    '--tui-negative-night',
    '--tui-negative-night-hover',
];
