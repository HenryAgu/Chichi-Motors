import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Cars Preview')
    .items([
      S.documentTypeListItem('car').title('Cars'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['car'].includes(item.getId()!),
      ),
    ]);
