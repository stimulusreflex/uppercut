import test from "tape";
import "fake-indexeddb/auto.js";

test("starting Uppercut opens a new IndexedDB whose name includes the hashed hostname, and returns an object with a handle to that DB", t => {});

test("starting Uppercut with a suffix argument opens a new IndexedDB whose name includes the hashed hostname and the appended suffix", t => {});

test("stopping Uppercut destroys the respective IndexedDB", t => {});
