# Sync

Snippets is offline-first by design. You can use the app fully offline and without creating an account. All your data is stored locally on your device and always remains under your control. You decide how your data is synced or backed up. The following section describes which options exist.

## Targets

### Local folder

All data is stored in a folder of your choice on your local disk. This allows you to back up your notes using tools like Google Drive, iCloud, Dropbox, or external disks and keep full control over your files without relying on any external service.

The limititation with folder sync is, that it is not possible to sync your data to a mobile device, and there is no good way to share notes with other users.

### GitHub Repo

Snippets can sync your data to a GitHub repository. There is no need for manual or scheduled commits. Instead, Changes are synced automatically as soon as a document is modified. GitHub HTTP API is used under the hood, making it suitable for desktop and mobile devices.

### Snippets Cloud _(coming soon)_

Snippets Cloud is the official hosted sync solution. It gives you the following options:

- seamless multi-device sync
- note sharing and collaboration
- note history
- E2E encryption (can be enabled optionally)

## Workspaces

Snippets allows to separate data into workspaces. Every workspace has its own target. This gives you a lot of flexibility in how to organize your work. For example, you can choose to store a temporary throw-away project on your disk with folder sync, create an unencrypted cloud workspace to share some notes with friends, create an E2E-encrypted workspace for your journaling, and a GitHub-synced workspace for work.
