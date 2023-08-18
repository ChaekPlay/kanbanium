<script setup lang="ts">
    class KanbanList {
        name = "New List"
        cards: KanbanCard[]
        constructor(name: string, cards: KanbanCard[]) {
            this.name = name;
            this.cards = cards;
        }
    }
    class KanbanCard {
        id: number;
        description: string; 
        tags: string[]; 
        constructor(id: number, description: string, tags: string[]) {
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
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", ["example", "bug", "warning"]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", ["example", "bug", "warning"]));
        list.cards.push(new KanbanCard(test_id++, "lorem ipsum", ["example", "bug", "warning"]));
    }
    test_data[0].cards.push(new KanbanCard(test_id++, "lorem ipsum", ["example", "bug", "warning"]))
</script>
<template>
    <section class=" p-10">
        <h1 class="text-5xl text-center mb-6">Test page</h1>
        <div class=" grid grid-cols-1 max-lg:grid-cols-2 max-md:grid-cols-1 gap-6">
            <div v-for="list in test_data" :key="list.name" class="list-container">
               <div v-for="card in list.cards" :key="card.id" class="card">
                    {{card.id}}<br>
                        {{card.description}}<br>
                        {{card.tags}}<br>
                </div>
                <br>
            </div>
        </div>
    </section>
</template>
