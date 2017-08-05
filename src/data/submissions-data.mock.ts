
// Default mock data
const DATA = [
        {title: 'title1', shortDesc: 'ShortDesc1'},
        {title: 'title2', shortDesc: 'ShortDesc2'},
        {title: 'title3', shortDesc: 'ShortDesc3'},
        {title: 'title4', shortDesc: 'ShortDesc4'},
    ];

export interface Data {
  title: string;
  shortDesc: string;
}

export class DataMock {

    private data: Data[];

    constructor() {
        this.data = DATA;
    }

    public getAll() {
        return new Promise((resolve, reject) => {
            resolve(this.data);
        });
    }
}

//     exports.findById = function(id, cb) {
//   process.nextTick(function() {
//     var idx = id - 1;
//     if (records[idx]) {
//       cb(null, records[idx]);
//     } else {
//       cb(new Error('User ' + id + ' does not exist'));
//     }
//   });
// }

// exports.findByUsername = function(username, cb) {
//   process.nextTick(function() {
//     for (var i = 0, len = records.length; i < len; i++) {
//       var record = records[i];
//       if (record.username === username) {
//         return cb(null, record);
//       }
//     }
//     return cb(null, null);
//   });
// }
