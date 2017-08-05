import * as express from 'express';
import { SubmissionApiBase } from './submission-base';
import { SubmissionsDataMock } from '../../data/submissions-data.mock';

export class SubmissionApiV1 extends SubmissionApiBase {

    constructor() {
        super();
    }

    public getAll(req: express.Request, res: express.Response, next: express.NextFunction) {
        let submissionsData = new SubmissionsDataMock();
        submissionsData.getAll().then((data) => {
            res.status(200).json(data);
        });
    }

    // TODO Adding search and pagination
}
