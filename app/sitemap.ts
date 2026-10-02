import type {MetadataRoute} from 'next';
export default function sitemap():MetadataRoute.Sitemap{return ['','about','industries','services','why-oryenza','process','contact'].map(p=>({url:`https://oryenza.in/${p}`,changeFrequency:'monthly',priority:p?0.8:1}))}
