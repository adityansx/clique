const easyMDE = new EasyMDE({
    element: document.getElementById('post-content')
    // toolbar: ["bold", "italic", "heading", "|", "quote"]
});

const publishBtn = document.querySelector('#test');

publishBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(`Title: ${document.querySelector('#post-title').value}\nContent: ${easyMDE.value()}`
    )
})
