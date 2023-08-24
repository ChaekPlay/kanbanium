<script setup lang="ts">
    import CardTag from "@/components/CardTag.vue";
    class Tag {
        name: string;
        color: string;
        constructor(name: string, color: string) {
            this.name = name;
            this.color = color;
        }
    }
    let example_tag = new Tag("example", "#7f079d");
    let warning_tag = new Tag("warning", "#FFFF00");
    let bug_tag = new Tag("bug", "#ff5f5f");
    class KanbanList {
        name = "New List"
        id: number = 0;
        cards: KanbanCard[]
        constructor(name: string, cards: KanbanCard[]) {
            this.name = name;
            this.cards = cards;
        }
    }
    class KanbanCard {
        id: number;
        description: string; 
        tags: Tag[]; 
        constructor(id: number, description: string, tags: Tag[]) {
            this.id = id;
            this.description = description;
            this.tags = tags;
        }
    }
    let test_data: KanbanList[] = [];
    for(let i = 0; i < 4; i++) {
        test_data.push(new KanbanList("List", []));
    }
    let test_id = 0;
    for(let list of test_data) {
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum dsfjksdhfjkdshfjksdjkfhjdksfjkhdsjk", [example_tag, bug_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [bug_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag]));
    }
    test_data[0].cards.push(new KanbanCard(test_id++, "lorem ipsum", [example_tag, warning_tag, bug_tag]))
</script>
<template>
    <section class=" p-10">
        <h1 class="text-5xl mb-6">Boards</h1>
        <div class="flex flex-nowrap gap-8">
            <div v-for="list in test_data" :key="list.name" class="list-container">
                <p class="px-4 py-2 text-2xl">{{list.name}}</p>
               <div v-for="card in list.cards" :key="card.id" class="card">
                    <div class="card-body">
                        <p>{{card.description}}</p>
                    </div>
                    <div class="card-tags flex gap-4">
                        <CardTag v-for="tag in card.tags" :key="tag.name" :name="tag.name" :color="tag.color"/>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </section>
</template>
<style scoped>
.list-container {
    @apply border shadow rounded p-4;
}
.card {
    @apply border shadow rounded p-4 m-4;
}
.card-tags {
    @apply border-t mt-2 pt-2;
}
</style>
