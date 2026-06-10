function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const noteList = document.getElementById("noteList");

  noteList.innerHTML = "";

  notes.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    noteList.appendChild(li);
  });
}

function addNote() {
  const noteInput = document.getElementById("noteInput");
  const text = noteInput.value.trim();

  if (!text) return;

  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push(text);

  localStorage.setItem("notes", JSON.stringify(notes));

  noteInput.value = "";
  loadNotes();
}

loadNotes();