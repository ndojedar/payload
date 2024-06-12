import type { SanitizedCollectionConfig, SanitizedGlobalConfig } from 'payload/bundle'

export type Props = {
  className?: string
  collectionSlug?: SanitizedCollectionConfig['slug']
  globalSlug?: SanitizedGlobalConfig['slug']
  label: SanitizedCollectionConfig['labels']['singular']
  originalDocID: number | string
  versionDate: string
  versionID: string
}
