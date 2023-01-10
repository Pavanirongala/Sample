export class JsonDataService {
    details = [
        {
            "id": 1,
            "fname": "pavani",
            "lname": "rongala",
            "address": "hyd",
            "email": "pavani@gmail.com",
            "password": "pavani"
        },
        {
            "id": 2,
            "fname": "durga",
            "lname": "rongala",
            "address": "sec",
            "email": "durga@gmail.com",
            "password": "durga"
        },
        {
            "id": 3,
            "fname": "priya",
            "lname": "xz",
            "address": "vizag",
            "email": "priya@gmail.com",
            "password": "priya"
        }

    ];
    getAllDetails(): any {
        const data = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.details)
            }, 5000)
        });
        return data;
    }
}