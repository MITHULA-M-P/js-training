interface Task {
    id: number;
    name: string;
    priority: "Low" | "Medium" | "High";
    dueDate: string;
    done: boolean;
}

export class TaskManager {
    private tasks: Task[] = [];

    constructor() {
        this.load();
    }

    add(data: Omit<Task, "id" | "done">): Task {
        const task: Task = {
            id: Date.now(),
            name: data.name,
            priority: data.priority,
            dueDate: data.dueDate,
            done: false
        };

        this.tasks.push(task);
        this.save();

        return task;
    }

    getAll(): Task[] {
        return [...this.tasks];
    }

    toggle(id: number): void {
        this.tasks = this.tasks.map(task =>
            task.id === id
                ? { ...task, done: !task.done }
                : task
        );

        this.save();
    }

    clear(): void {
        this.tasks = [];
        this.save();
    }

    filter(status: "all" | "done" | "pending"): Task[] {

        if (status === "done") {
            return this.tasks.filter(task => task.done);
        }

        if (status === "pending") {
            return this.tasks.filter(task => !task.done);
        }

        return [...this.tasks];
    }

    sortBy(field: "priority" | "dueDate"): Task[] {

        const priorityOrder = {
            High: 1,
            Medium: 2,
            Low: 3
        };

        return [...this.tasks].sort((a, b) => {

            if (field === "priority") {
                return priorityOrder[a.priority] - priorityOrder[b.priority];
            }

            return a.dueDate.localeCompare(b.dueDate);

        });

    }

    private save(): void {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    load(): void {
        const data = localStorage.getItem("tasks");

        if (data) {
            this.tasks = JSON.parse(data);
        }
    }
}

export function groupBy<T>(
    array: T[],
    key: keyof T
): Record<string, T[]> {

    const result: Record<string, T[]> = {};

    array.forEach(item => {

        const value = String(item[key]);

        if (!result[value]) {
            result[value] = [];
        }

        result[value].push(item);

    });

    return result;
}