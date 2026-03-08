import type { CollectionEntry } from "astro:content";

export default function getSortedEvents(eventsCollection: CollectionEntry<"events">[], limit?: number): CollectionEntry<"events">[] {
    const upcomingEvents = eventsCollection.filter((event) => new Date().setHours(0, 0, 0, 0) <= event.data.date.setHours(0, 0, 0, 0));  // Obtenemos los eventos que tengan una fecha mayor o igual a la actual solo teniendo en cuenta el día, mes y año.
    const eventsSorted = upcomingEvents.sort((a, b) => a.data.date.getTime() - b.data.date.getTime());
    const result = limit && limit > 0 ? eventsSorted.slice(0, limit) : eventsSorted;

    return result;
}