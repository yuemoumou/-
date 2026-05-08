const carList = [
    {
        id:1,
        carNumber:"A12345",
        time:"10:00"
    },
    {
        id:2,
        carNumber:"B88888",
        time:"11:00"
    }
];

const tableBody = document.getElementById("carTableBody");

function renderTable(data = carList){

    tableBody.innerHTML = "";

    data.forEach((car) => {

        tableBody.innerHTML += `
        <tr>
            <td>${car.carNumber}</td>
            <td>${car.time}</td>
            <td>
                <button class="delete-btn" onclick="deleteCar(${car.id})">
                    删除
                </button>
            </td>
        </tr>
        `;
    });
}

renderTable();

function deleteCar(id){

    const index = carList.findIndex(car => car.id === id);

    carList.splice(index, 1);

    renderTable();
}

document.getElementById("addBtn").onclick = function(){

    const carNumber = prompt("请输入车牌号");

    const time = prompt("请输入进入时间");

    if(carNumber && time){

        carList.push({
            carNumber,
            time
        });

        renderTable();
    }
}

document.getElementById("searchBtn").onclick = function(){

    const keyword = document.getElementById("searchInput").value;

    const result = carList.filter(car => {

        return car.carNumber.includes(keyword);

    });

    renderTable(result);
}