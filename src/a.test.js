import test from 'ava'
import td from 'testdouble'
import A from './a'

test('fetch', t => {
	let fetch = td.function();
	let a = new A('v')
	t.is(a.name, 'v')

	td.when(fetch(42)).thenReturn('Jane User');

	t.is(fetch(42), 'Jane User');
});

test('+', t => {
	t.is(1 + 1, 2);
});
