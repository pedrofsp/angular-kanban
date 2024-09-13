import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'board-component',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="card bg-dark text-white me-3" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">Card title: {{ title }}</h5>
        <div class="my-3"></div>
        <ul class="list-group">
          @for (issue of issues; track issue.id;) {
          <li
            class="list-group-item list-group-item-secondary mb-2 d-flex justify-content-between"
          >
            <div>{{ issue.id }} - {{ issue.title }}</div>
            <i
              (click)="deleteIssue(issue.id)"
              class="bi bi-trash-fill fs-5 text-danger"
              style="cursor: pointer;"
            ></i>
          </li>
          }
        </ul>
        <div class="my-2"></div>
        <button
          class="btn btn-primary w-100 d-flex justify-content-center"
          data-bs-toggle="modal"
          [attr.data-bs-target]="'#issueModal-' + id"
        >
          <i class="bi bi-plus fs-8"></i>
          <div class="ms-2">Add an issue!</div>
        </button>
      </div>
    </div>

    <div
      class="modal fade"
      [attr.id]="'issueModal-' + id"
      tabindex="-1"
      [attr.aria-labelledby]="'issueModalLabel-' + id"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title text-dark"
              [attr.id]="'issueModalLabel-' + id"
            >
              New Issue
            </h5>
            <button type="button" class="btn-close" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form [formGroup]="newIssueForm" (submit)="addNewIssue()">
              <div class="mb-3">
                <label for="issueTitle" class="form-label text-dark"
                  >Title</label
                >
                <input
                  type="text"
                  id="issueTitle"
                  class="form-control"
                  required
                  formControlName="title"
                />
              </div>
              <div class="mb-3">
                <label for="issueDescription" class="form-label text-dark"
                  >Description</label
                >
                <textarea
                  id="issueDescription"
                  class="form-control"
                  formControlName="description"
                  required
                ></textarea>
              </div>
              <div class="mb-3">
                <label for="issueStatus" class="form-label text-dark"
                  >Status</label
                >
                <select
                  id="issueStatus"
                  class="form-select"
                  formControlName="status"
                  required
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                  <option value="Closed">Closed</option>
                </select>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add Issue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class BoardComponent {
  @Input() title!: string;
  @Input() id!: number; // Unique ID input

  issues: { id: number; title: string; description: string; status: string }[] =
    [
      {
        id: 1,
        title: 'Issue 1',
        description: 'This is a description for issue 1.',
        status: 'Open',
      },
      {
        id: 2,
        title: 'Issue 2',
        description: 'Issue 2 has a different problem.',
        status: 'In Progress',
      },
      {
        id: 3,
        title: 'Issue 3',
        description: 'Issue 3 is almost resolved.',
        status: 'Resolved',
      },
      {
        id: 4,
        title: 'Issue 4',
        description: 'This is a critical issue.',
        status: 'Closed',
      },
    ];

  // Object for new issue data
  newIssueForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    status: new FormControl('Open'),
  });

  addNewIssue() {
    let newIssue = {
      id:
        this.issues.length > 0
          ? Math.max(...this.issues.map((issue) => issue.id)) + 1
          : 1,
      title: this.newIssueForm.get('title')?.value || '',
      description: this.newIssueForm.get('description')?.value || '',
      status: this.newIssueForm.get('status')?.value || '',
    };

    this.issues.push(newIssue);

    this.newIssueForm.reset({
      title: '',
      description: '',
      status: 'Open',
    });
  }

  deleteIssue(issueId: number) {
    this.issues = this.issues.filter((issue) => issue.id !== issueId);
  }
}
