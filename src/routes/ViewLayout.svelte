<div class="flex flex-col h-full">
   <div class="h-full overflow-scroll px-4 pt-4 items-center flex-auto flex flex-col gap-2">
      <slot />
   </div>
   <div class="flex h-fit justify-around">
     <slot name="toolbar" />
   </div>
</div>
