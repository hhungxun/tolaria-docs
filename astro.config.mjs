import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://hhungxun.github.io',
  base: '/tolaria-docs',
  integrations: [
    starlight({
      title: 'Tolaria Docs',
      description:
        'Public documentation for Tolaria, a Markdown and Git-first knowledge workspace for the AI era.',
      logo: {
        src: './public/assets/official/tolaria-icon.png',
        alt: 'Tolaria',
      },
      favicon: '/assets/official/favicon.png',
      editLink: {
        baseUrl: 'https://github.com/hhungxun/tolaria-docs/edit/main/',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/hhungxun/tolaria-docs',
        },
      ],
      customCss: ['./src/styles/tolaria.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Install Tolaria', slug: 'start/install' },
            { label: 'Create Your First Vault', slug: 'start/first-vault' },
            { label: 'First 10 Minutes', slug: 'start/first-10-minutes' },
            { label: 'Starter Vault Tour', slug: 'start/starter-vault-tour' },
          ],
        },
        {
          label: 'Tutorials',
          items: [
            { label: 'The Tolaria Loop', slug: 'tutorials/tolaria-loop' },
            { label: 'Organize Your Workspace', slug: 'tutorials/organize-workspace' },
            { label: 'Inbox Workflow', slug: 'tutorials/inbox-workflow' },
            { label: 'Save Web Resources', slug: 'tutorials/save-web-resources' },
            { label: 'Build a Project System', slug: 'tutorials/build-a-project-system' },
            { label: 'Use AI With Your Vault', slug: 'tutorials/use-ai-with-your-vault' },
          ],
        },
        {
          label: 'Concepts',
          items: [
            { label: 'Principles', slug: 'concepts/principles' },
            { label: 'Markdown Vaults', slug: 'concepts/markdown-vaults' },
            { label: 'Types as Lenses', slug: 'concepts/types-as-lenses' },
            { label: 'Relationships', slug: 'concepts/relationships' },
            { label: 'Views', slug: 'concepts/views' },
            { label: 'Git and AutoGit', slug: 'concepts/git-and-autogit' },
            { label: 'AI-Native Vaults', slug: 'concepts/ai-native-vaults' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Sidebar', slug: 'reference/sidebar' },
            { label: 'Note List', slug: 'reference/note-list' },
            { label: 'Editor', slug: 'reference/editor' },
            { label: 'Properties Panel', slug: 'reference/properties-panel' },
            { label: 'Command Palette', slug: 'reference/command-palette' },
            { label: 'Bottom Bar', slug: 'reference/bottom-bar' },
            { label: 'Vault Format', slug: 'reference/vault-format' },
            { label: 'Frontmatter', slug: 'reference/frontmatter' },
            { label: 'Saved Views', slug: 'reference/saved-views' },
            { label: 'Shortcuts', slug: 'reference/shortcuts' },
          ],
        },
      ],
    }),
  ],
});
