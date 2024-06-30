document.addEventListener("DOMContentLoaded", function() {
    fetch('experiences.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('introduction').textContent = data.introduction;
            
            const teachingList = document.getElementById('teaching');
            data.teaching.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'experience-item';
                listItem.textContent = item;
                teachingList.appendChild(listItem);
            });

            const researchList = document.getElementById('research');
            data.research.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'experience-item';
                listItem.textContent = item;
                researchList.appendChild(listItem);
            });

            const othersList = document.getElementById('others');
            data.others.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'experience-item';
                listItem.textContent = item;
                othersList.appendChild(listItem);
            });

            const coursesList = document.getElementById('courses');
            data.courses.forEach(item => {
                const listItem = document.createElement('li');
                listItem.className = 'experience-item';
                listItem.textContent = item;
                coursesList.appendChild(listItem);
            });

            document.querySelectorAll('.fade-in').forEach((element, i) => {
                setTimeout(() => {
                    element.classList.add('visible');
                }, i * 500);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
