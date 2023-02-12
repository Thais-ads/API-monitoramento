
        const ctx = document.getElementById('myChart');
      
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab' , 'Dom'],
            datasets: [{
              label: '#TAXA DE OFFLINES',
              data: [12, 19, 3, 5, 2, 15,8],
              borderWidth: 1,
              borderColor: 'rgb(3, 157, 216)',
              backgroundColor: 'rgb(3, 157, 216)',
            }]
          },
          options: {
            
          }
        });
    