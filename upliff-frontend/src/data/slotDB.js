// slotDB.js
// Handles therapist slots using localStorage

// Step 1: Generate initial slots (1 month, weekdays only)
export const generateInitialSlots = () => {
  const therapists = [
    { id: 1, name: "Dr. Aisha Khan" },
    { id: 2, name: "Dr. Daniel Kim" },
    { id: 3, name: "Dr. Isabella Martinez" },
    { id: 4, name: "Dr. Marcus Johnson" },
    { id: 5, name: "Dr. Chloe Nguyen" },
    { id: 6, name: "Dr. Ethan Rossi" },
    { id: 7, name: "Dr. Layla Hassan" },
    { id: 8, name: "Dr. Noah Clarke" },
    { id: 9, name: "Dr. Meera Shah" },
    { id: 10, name: "Dr. Caleb White" },
    { id: 11, name: "Dr. Priya Rao" },
    { id: 12, name: "Dr. Lucas Rivera" }
  ];

  const slotsPerDay = ["10:00", "11:00", "14:00", "15:00"];
  const today = new Date();
  const data = [];

  therapists.forEach((t) => {
    const slots = [];
    let slotId = 1;

    for (let d = 0; d < 30; d++) {
      const date = new Date(today);
      date.setDate(today.getDate() + d);

      const day = date.getDay();
      if (day === 0 || day === 6) continue; // skip weekends

      slotsPerDay.forEach((time) => {
        slots.push({
          id: slotId++,
          datetime: `${date.toISOString().split("T")[0]}T${time}`,
          booked: false
        });
      });
    }

    data.push({ ...t, slots });
  });

  return data;
};

// Step 2: Initialize DB if it doesn't exist
export const initLocalDB = () => {
  const existing = localStorage.getItem("therapistDB");
  if (!existing) {
    localStorage.setItem(
      "therapistDB",
      JSON.stringify(generateInitialSlots())
    );
  }
};
// Step 3: Get available slots for a therapist
export const getAvailableSlots = (therapistId) => {
  initLocalDB(); // ← THIS WAS MISSING

  const db = JSON.parse(localStorage.getItem("therapistDB")) || [];
  const therapist = db.find((t) => t.id === therapistId);

  if (!therapist) return [];

  return therapist.slots.filter((s) => !s.booked);
};

// Step 4: Book a slot
export const bookSlot = (therapistId, slotId) => {
  initLocalDB(); // ← ALSO REQUIRED

  const db = JSON.parse(localStorage.getItem("therapistDB")) || [];
  const therapist = db.find((t) => t.id === therapistId);
  if (!therapist) return;

  const slot = therapist.slots.find((s) => s.id === slotId);
  if (slot) slot.booked = true;

  localStorage.setItem("therapistDB", JSON.stringify(db));
};